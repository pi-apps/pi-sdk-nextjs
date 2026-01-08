// lib/piServer.ts

export type PiServerConfig = {
  apiUrlBase: string;
  apiVersion: string;
  apiController: string;
  apiKey: string;
};

export function getPiServerConfig(): PiServerConfig {
  // You can enhance this function to load config from a file, next.config.js, or process.env
  const apiUrlBase = process.env.PI_API_URL_BASE! || "https://api.minepi.com";
  const apiVersion = process.env.PI_API_VERSION! || "v2";
  const apiController = process.env.PI_API_CONTROLLER! || "payments";
  const apiKey = process.env.PI_API_KEY!;

  if (!apiUrlBase || !apiVersion || !apiController || !apiKey) {
    throw new Error("Missing PiServer configuration (API URL, version, controller, or key)");
  }

  return { apiUrlBase, apiVersion, apiController, apiKey };
}

export type PostToPiServerOpts = {
  logOk?: (msg: string, res: unknown) => void;
  logFail?: (msg: string, error: unknown, status?: number) => void;
  header?: Record<string, string>;
};

/**
 * Makes a POST request to the Pi SDK server for a given action.
 * Returns the parsed JSON response, or throws an error.
 */
export async function postToPiServer(
  action: string,
  paymentId: string,
  body: any = {},
  opts: PostToPiServerOpts = {}
): Promise<any> {
  const { apiUrlBase, apiVersion, apiController, apiKey } = getPiServerConfig();

  const url = `${apiUrlBase.replace(/\/$/, '')}/${apiVersion}/${apiController}/${paymentId}/${action}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Authorization': `Key ${apiKey}`,
    ...(opts.header || {})
  };

  let response;
  try {
    response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    });
  } catch (error) {
    opts.logFail?.(`Pi server POST ${action} failed: Network error`, error);
    throw new Error(`Network error for PiServer: ${error}`);
  }

  let parsed;
  const responseText = await response.text();
  try {
    parsed = JSON.parse(responseText);
  } catch (e) {
    opts.logFail?.(`Pi server POST ${action} failed: Invalid JSON (${response.status})`, responseText, response.status);
    throw new Error(`Invalid JSON from PiServer: ${responseText}`);
  }

  if (response.ok) {
    opts.logOk?.(`Pi server POST ${action} succeeded (${response.status})`, parsed);
    return parsed;
  } else {
    opts.logFail?.(`Pi server POST ${action} failed with status ${response.status}`, parsed, response.status);
    throw new Error(`PiServer call failed: HTTP ${response.status}: ${responseText}`);
  }
}
