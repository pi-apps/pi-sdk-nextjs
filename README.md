# Pi SDK Next.js Integration – External Developer Guide

This package helps you quickly scaffold, configure, and integrate all
necessary components for using Pi Network payments, authentication,
and user flows with a Next.js project.  It is designed for modern
Next.js apps (App Router or Pages Router) that want a working,
idiomatic Pi payment and authentication experience with minimal
boilerplate.

---

## 🚀 Quick Start

1. **Add as a dependency in your Next.js project**
   ```sh
   yarn add pi-sdk-nextjs pi-sdk-react pi-sdk-js
   # or
   npm install pi-sdk-nextjs pi-sdk-react pi-sdk-js
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

---

## 📹 Video Script
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
