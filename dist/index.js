import { NextResponse as a } from "next/server";
function I() {
  const t = process.env.PI_API_URL_BASE || "https://api.minepi.com", o = process.env.PI_API_VERSION || "v2", r = process.env.PI_API_CONTROLLER || "payments", e = process.env.PI_API_KEY;
  if (!e)
    throw new Error("Missing PiServer configuration (API URL, version, controller, or key)");
  return { apiUrlBase: t, apiVersion: o, apiController: r, apiKey: e };
}
async function d(t, o, r = {}, e = {}) {
  const { apiUrlBase: c, apiVersion: s, apiController: n, apiKey: i } = I(), p = `${c.replace(/\/$/, "")}/${s}/${n}/${o}/${t}`, P = {
    "Content-Type": "application/json",
    Authorization: `Key ${i}`,
    ...e.header || {}
  };
  let l;
  try {
    l = await fetch(p, {
      method: "POST",
      body: JSON.stringify(r),
      headers: P
    });
  } catch (m) {
    throw e.logFail?.(`Pi server POST ${t} failed: Network error`, m), new Error(`Network error for PiServer: ${m}`);
  }
  let u;
  const y = await l.text();
  try {
    u = JSON.parse(y);
  } catch {
    throw e.logFail?.(`Pi server POST ${t} failed: Invalid JSON (${l.status})`, y, l.status), new Error(`Invalid JSON from PiServer: ${y}`);
  }
  if (l.ok)
    return e.logOk?.(`Pi server POST ${t} succeeded (${l.status})`, u), u;
  throw e.logFail?.(`Pi server POST ${t} failed with status ${l.status}`, u, l.status), new Error(`PiServer call failed: HTTP ${l.status}: ${y}`);
}
async function f(t) {
  try {
    const o = await t.json(), { accessToken: r, paymentId: e } = o;
    if (console.log("[PiSDK][approve] Incoming request payload:", o), !r || !e)
      return console.warn("[PiSDK][approve] Missing params: accessToken or paymentId. Payload was:", o), a.json(
        { error: "Missing required params: accessToken, paymentId" },
        { status: 400 }
      );
    const c = await d(
      "approve",
      e,
      { paymentId: e, accessToken: r },
      {
        logOk: (s, n) => console.log(`Pi payment approved for paymentId=${e}`, s, n),
        logFail: (s, n) => console.error(`Pi approve error for paymentId=${e}`, s, n)
      }
    );
    return console.log("[PiSDK][approve] Sent to Pi server. Received:", c), a.json({
      result: "approved",
      paymentId: e,
      piServer: c.response
    });
  } catch (o) {
    return console.error("[PiSDK][approve] Error in handler:", o), a.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function v(t) {
  try {
    const o = await t.json(), { accessToken: r, paymentId: e } = o;
    if (!r || !e)
      return a.json(
        { error: "Missing required params: accessToken, paymentId" },
        { status: 400 }
      );
    const c = await d(
      "cancel",
      e,
      { paymentId: e, accessToken: r },
      {
        logOk: (s, n) => console.log(`Pi payment cancelled for paymentId=${e}`, s, n),
        logFail: (s, n) => console.error(`Pi cancel error for paymentId=${e}`, s, n)
      }
    );
    return a.json({
      result: "cancelled",
      paymentId: e,
      piServer: c.response
    });
  } catch {
    return a.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function S(t) {
  try {
    const o = await t.json(), { paymentId: r, transactionId: e } = o;
    if (!r || !e)
      return a.json(
        { error: "Missing required params: accessToken, paymentId, transactionId" },
        { status: 400 }
      );
    const s = await d(
      "complete",
      r,
      { paymentId: r, txid: e },
      {
        logOk: (n, i) => console.log(`Pi payment completed for paymentId=${r}`, n, i),
        logFail: (n, i) => console.error(`Pi complete error for paymentId=${r}`, n, i)
      }
    );
    return a.json({
      result: "completed",
      paymentId: r,
      piServer: s.response
    });
  } catch {
    return a.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function $(t) {
  try {
    const o = await t.json(), { accessToken: r, paymentId: e, errorMessage: c } = o;
    if (!r || !e)
      return a.json(
        { error: "Missing required params: accessToken, paymentId" },
        { status: 400 }
      );
    const s = await d(
      "error",
      e,
      { paymentId: e, accessToken: r, errorMessage: c },
      {
        logOk: (n, i) => console.log(`Pi payment error logged for paymentId=${e}`, n, i),
        logFail: (n, i) => console.error(`Pi error log failed for paymentId=${e}`, n, i)
      }
    );
    return a.json({
      result: "error-logged",
      paymentId: e,
      piServer: s.response
    });
  } catch {
    return a.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function w(t) {
  try {
    const o = await t.json(), { paymentId: r, transactionId: e } = o;
    if (!r || !e)
      return a.json(
        { error: "Missing required params: paymentId, transactionId" },
        { status: 400 }
      );
    console.log("INCOMPLETE");
    const c = "complete";
    let s;
    return c === "complete" && (s = await d(
      "complete",
      r,
      { paymentId: r, txid: e },
      {
        logOk: (i, p) => console.log(`Pi payment completed for incomplete paymentId=${r}`, i, p),
        logFail: (i, p) => console.error(`Pi completion from incomplete failed for paymentId=${r}`, i, p)
      }
    )), a.json({
      result: c,
      paymentId: r,
      piServer: s.response
    });
  } catch {
    return a.json({ error: "Invalid payload" }, { status: 400 });
  }
}
export {
  f as approvePOST,
  v as cancelPOST,
  S as completePOST,
  $ as errorPOST,
  w as incompletePOST
};
//# sourceMappingURL=index.js.map
