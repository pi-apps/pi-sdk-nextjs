# pi-sdk-nextjs

> SDK utilities for integrating **Pi Network authentication** into Next.js applications.

This repository provides a small JavaScript/TypeScript SDK and CLI helpers to support **secure, server-side Pi authentication flows** in modern Next.js projects.

> ℹ️ This documentation focuses on **authentication**.  
> For **payments, PiButton, and API scaffolding**, refer to the existing Quick Start documentation in this repository.

---

## 🧠 Overview

`pi-sdk-nextjs` is designed for developers who want to integrate Pi Network authentication into Next.js applications with minimal boilerplate and clear security boundaries.

The SDK is intentionally small and explicit. It is meant to be **composed into your own application logic**, not to abstract it away.

Core goals:
- Server-side verification of Pi authentication callbacks
- Clear separation between client and server responsibilities
- Native compatibility with the Next.js App Router

---

## ✨ Features

- 🔐 Secure server-side verification of Pi authentication callbacks  
- ⚡ Minimal and explicit API surface  
- 🧩 Works naturally with Next.js App Router  
- 🖥️ CLI support for setup and local testing  

---

## 📦 Installation

```bash
npm install pi-sdk-nextjs
# or
yarn add pi-sdk-nextjs
⚙️ Environment Variables
Create a .env.local file in your Next.js project:

Env
PI_API_KEY=your_pi_api_key
PI_APP_ID=your_app_id
PI_CALLBACK_URL=http://localhost:3000/api/pi/callback
⚠️ Never expose PI_API_KEY to the client.
All Pi verification must happen on the server.
🚀 Basic Usage (Next.js App Router)

===== Initialize the Pi Client
// lib/pi.ts
import { PiClient } from "pi-sdk-nextjs";

export const piClient = new PiClient({
  apiKey: process.env.PI_API_KEY!,
  appId: process.env.PI_APP_ID!,
  callbackUrl: process.env.PI_CALLBACK_URL!,
});

==== Redirect the User to Pi Login
// app/api/pi/auth/route.ts
import { NextResponse } from "next/server";
import { piClient } from "@/lib/pi";

export async function GET() {
  const authUrl = piClient.getAuthUrl();
  return NextResponse.redirect(authUrl);
}

?123 Handle the Pi Callback
// app/api/pi/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { piClient } from "@/lib/pi";

export async function GET(req: NextRequest) {
  const payload = await piClient.verifyCallback(req);

  // payload contains verified Pi user information
  console.log(payload);

  return NextResponse.redirect("/dashboard");
}


?123🔐 Security Model
All Pi authentication verification must occur server-side
Client input should never be trusted for authentication
Treat Pi callbacks as authentication events
Log and monitor failed verification attempts
🧩 Design Principles
Explicit over implicit authentication flow
Server-first security model
Framework-native Next.js integration
Composable SDK usage
📚 Examples
A complete working Next.js authentication example is provided separately under:
Salin kode

examples/nextjs-basic
🤝 Contributions
Contributions are welcome, especially:
Documentation improvements
Example applications
Non-breaking helper utilities
Please avoid modifying core authentication logic without prior discussion.
📄 License
This project is licensed under the same terms as the upstream repository.
All credits belong to the original maintainers.
