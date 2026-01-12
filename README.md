# Pi SDK Next.js Integration – Community Developer Guide

This package helps you quickly scaffold, configure, and integrate all
necessary components for using Pi Network payments, authentication,
and user flows with a Next.js project.  It is designed for modern
Next.js apps (App Router or Pages Router) that want a working,
idiomatic Pi payment and authentication experience with minimal
boilerplate.
It is part of the "Ten Minutes to Transactions" effort described in this
[video](https://www.youtube.com/watch?v=cIFqf1Z5pRM&t=35s).

---

## 🚀 Quick Start

1. **Add as a dependency in your Next.js project**
   ```sh
   yarn add pi-sdk-nextjs
   # or
   npm install pi-sdk-nextjs
   ```

2. **Run the Pi component and API scaffolder:**
   ```sh
   yarn pi-sdk-nextjs-install
   ```
   This will generate:
   - A `components/PiButton.tsx` file (ready-to-use React component)
   - All standard Pi payment API endpoints in `app/api/pi_payment/<event>/route.ts` (`approve`, `complete`, `cancel`, `error`, `incomplete`)

3. **Ensure the global Pi SDK is loaded:**
   Add the Pi SDK `<script>` to your document head (see the [official docs](https://developer.minepi.com/)):
   ```html
   <script src="https://sdk.minepi.com/pi-sdk.js"></script>
   ```

4. **Use the PiButton in your UI:**
   ```tsx
   import { PiButton } from '@/components/PiButton';
   // or relative:
   import { PiButton } from '../components/PiButton';

   export default function Page() {
     return <PiButton />;
   }
   ```

6. ** Register your application with Pi Network: **
   Open your Pi Mining app. Click the hamburger. Select "Pi Utilities". Click the "Develop" icon followed by the
   "New App" icon. Provide name and description of your app and submit. Then click the "Configuration" icon. Set
   the app URL to something valid, but does not necessarily exists, and the development URL to be
   "http://localhost:3000" (actual port is up to you). Submit your changes.

6. ** Provide the Pi API key as an environment variable: **
   Click on the "API Key" icon to get the API key for your app.
    ```bash
    export PI_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

6. ** Register a wallet for your app: **
   Click on the "Wallet" icon to select or create a wallet for use with your app.

7. ** Run your app through the Sandbox browser: **
   Start the local server.
    ```bash
    yarn dev
    ```
    Visit "https://sandbox.minepi.com/mobile-app-ui/app/your-app-name". It will ask you to provide an
    authorization code to the Pi Mining app. Click the link at the bottom of the Pi Utilities screen.

---

## 📹 Video Script
You can watch a [video](https://www.youtube.com/watch?v=cIFqf1Z5pRM&t=35s) describing the entire process.
Here's are the commands used in the video.
```bash
# Create the app
yarn create next-app tmtt_nextjs --yes

cd tmtt_nextjs

# Add the Pi SDK package for Next.js
yarn add pi-sdk-nextjs@https://github.com/pi-apps/pi-sdk-nextjs

# Generate the routes and PiButton.tsx
yarn pi-sdk-nextjs-install

# Load Pi SDK on your pages
sed -i '' '3i\
import Script from "next/script";\
'  app/layout.tsx

sed -i '' '28i\
        <head>\
          <Script src="https://sdk.minepi.com/pi-sdk.js" strategy="beforeInteractive" />\
        </head>\
' app/layout.tsx

# Enable PiButton on the home page
sed -i '' '2i\
import { PiButton } from "@/components/PiButton";
' app/page.tsx

sed -i '' '38i\
   <PiButton/>
' app/page.tsx

# Build the app
yarn build
```

---

## ❓ FAQ

### What does this CLI actually do?
- Generates a PiButton component for direct use in your app.
- Generates stubbed (or pluggable) Next.js API routes for all standard Pi payment lifecycle events.
- Handles directory creation and required "use client" directives for new components.

### How do I customize the generated code?
- Edit `components/PiButton.tsx` and API route files as you wish. New SDK versions won't overwrite unless you delete them first (or add a force flag to the CLI).

### Can I run this many times?
- Yes, running multiple times is safe—the CLI checks for pre-existing files and will not overwrite by default.

### Is this production safe?
- Yes, but always audit generated files and integrations before shipping!

### What else can I do with the SDKs?
- Leverage hooks, server helpers, and the underlying SDKs (`pi-sdk-react`, `pi-sdk-js`) for advanced use cases, custom payment flows, and more.

---

## 📚 Further Resources
- [Official Pi SDK Docs](https://developer.minepi.com/)
- [pi-sdk-react on GitHub](https://github.com/pi-apps/pi-sdk-react)
- [Pi SDK JS](https://github.com/pi-apps/pi-sdk-js)
