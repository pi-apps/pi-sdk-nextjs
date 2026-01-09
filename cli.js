#!/usr/bin/env node
import { spawn } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs/promises';
import minimist from 'minimist';
import { createRequire } from 'node:module';

const argv = process.argv.slice(2);
const require = createRequire(import.meta.url);

// Components directory for PiButton
const componentsDir = path.join(process.cwd(), 'components');
const piButtonFile = path.join(componentsDir, 'PiButton.tsx');

// Ensure components directory exists
const ensureComponents = async () => {
  await fs.mkdir(componentsDir, { recursive: true });
};

// Robustly resolve pi-sdk-react CLI regardless of hoisting/nesting
const reactBinPath = require.resolve('pi-sdk-react/cli.js', { paths: [process.cwd()] });

// Ensure components dir, then spawn the CLI with that dir as --dest
ensureComponents().then(() => {
  const child = spawn(
    process.execPath,
    [reactBinPath, '--dest', componentsDir, ...argv],
    { stdio: 'inherit' }
  );

  child.on('exit', async (code) => {
    if (code !== 0) {
      process.exit(code);
    }

    try {
      let content = await fs.readFile(piButtonFile, 'utf8');
      // Ensure "use client" at the top
      if (!content.startsWith('"use client"') && !content.startsWith("'use client'")) {
        content = '"use client";\n' + content;
      }
      // Replace: import { PaymentData } from 'pi-sdk-js';
      // with:     import { PaymentData, PiSdkBase } from 'pi-sdk-js';\nPiSdkBase.paymentBasePath = "api/pi_payment";
      content = content.replace(
        /import\s+\{\s*PaymentData\s*\}\s+from\s+['\"]pi-sdk-js['\"];?/,
        "import { PaymentData, PiSdkBase } from 'pi-sdk-js';\nPiSdkBase.paymentBasePath = \"api/pi_payment\";"
      );
      await fs.writeFile(piButtonFile, content, 'utf8');
    } catch (err) {
      console.error(`[Pi SDK Nextjs] Could not update PiButton.tsx:`, err);
      process.exit(1);
    }

    // Step 2: Add all required Next.js API endpoint routes
    const endpoints = [
      'approve',
      'complete',
      'cancel',
      'error',
      'incomplete'
    ];
    for (const endpoint of endpoints) {
      const apiRouteDir = path.join(process.cwd(), 'app', 'api', 'pi_payment', endpoint);
      await fs.mkdir(apiRouteDir, { recursive: true });
      const routeFile = path.join(apiRouteDir, 'route.ts');
      if (!(await fileExists(routeFile))) {
        const content = `import { NextRequest, NextResponse } from 'next/server';\n\nexport async function POST(req: NextRequest) {\n  // TODO: Fill this handler with Pi logic or call out to your SDK\n  return NextResponse.json({ ok: true, endpoint: '${endpoint}' });\n}\n`;
        await fs.writeFile(routeFile, content, 'utf8');
      }
    }
  });
});

async function fileExists(file) {
  try {
    await fs.access(file);
    return true;
  } catch { return false; }
}
