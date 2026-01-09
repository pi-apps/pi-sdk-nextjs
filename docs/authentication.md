# Authentication Flow

This document describes the complete authentication model for integrating
Pi Network login into a Next.js application using `pi-sdk-nextjs`.

It covers the authentication flow, security boundaries, and recommended
server-side patterns for handling Pi identity safely.

---

## Overview

Pi authentication is a redirect-based flow where identity verification is
performed by Pi Network and validated by your server.

`pi-sdk-nextjs` provides helpers to:
- Generate Pi authentication URLs
- Verify authentication callbacks server-side
- Integrate cleanly with Next.js App Router

This SDK does **not** manage sessions, users, or authorization logic.
Those responsibilities remain with your application.

---

## High-Level Flow

User │ │  (1) Initiates login ▼ Next.js App │ │ 
(2) Redirect to Pi auth URL ▼ Pi Network │ │ 
(3) User approves authentication ▼ Callback Endpoint (Server) │ │
(4) Verify callback ▼ Application Session

---

## Trust and Security Model

### Server-Side Trust Boundary

All security-sensitive operations must occur on the server:
- Callback verification
- Identity validation
- Session creation

Client-side code must always be treated as **untrusted**.

---

### API Key Handling

`PI_API_KEY` is a server-only secret.

- Store it in environment variables
- Never expose it to client-side code
- Never inject it into public API responses

If exposed, the key should be rotated immediately.

---

## Server-Side Initialization

Authentication must be initialized on the server.

```ts
// lib/pi.ts
import { PiClient } from "pi-sdk-nextjs";

export const piClient = new PiClient({
  apiKey: process.env.PI_API_KEY!,
  appId: process.env.PI_APP_ID!,
  callbackUrl: process.env.PI_CALLBACK_URL!,
});

// app/api/pi/auth/route.ts
import { NextResponse } from "next/server";
import { piClient } from "@/lib/pi";

export async function GET() {
  const authUrl = piClient.getAuthUrl();
  return NextResponse.redirect(authUrl);
}

// app/api/pi/callback/route.ts
import { NextRequest, NextResponse } from "next/server";
import { piClient } from "@/lib/pi";

export async function GET(req: NextRequest) {
  const payload = await piClient.verifyCallback(req);

  // payload contains verified Pi user identity
  // e.g. a unique Pi user identifier

  return NextResponse.redirect("/dashboard");
}
