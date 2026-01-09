# Security Model

This document describes the security model and best practices for integrating
Pi Network authentication and related flows using `pi-sdk-nextjs`.

The goal is to ensure that all Pi-based integrations remain secure, verifiable,
and compliant with recommended server-side patterns.

---

## Core Principles

### 1. Server-Side Trust Boundary

All security-sensitive operations **must be performed on the server**.

This includes:
- Verifying Pi authentication callbacks
- Validating signed payloads
- Handling payment approval or completion events
- Storing and using Pi API keys

Client-side code should be treated as **untrusted**.

---

### 2. API Keys Must Never Reach the Client

`PI_API_KEY` is a **server-only secret**.

- It must be stored in environment variables
- It must never be exposed via:
  - Client-side JavaScript
  - Public API routes
  - Build-time injected variables

If a Pi API key is exposed to the client, it should be considered compromised
and rotated immediately.

---

### 3. Authentication Is an Event, Not a State

Pi authentication callbacks should be treated as **authentication events**,
not as long-lived session guarantees.

Recommended pattern:
- Verify the callback server-side
- Extract the verified Pi user identifier
- Establish your own application session or token
- Do not reuse or trust callback payloads beyond initial verification

---

## Callback Verification

All callbacks received from Pi Network **must be verified** using server-side
logic provided by the SDK.

### Recommended Flow

1. User is redirected to Pi authentication
2. Pi redirects back to your application callback URL
3. The server:
   - Receives the request
   - Verifies the callback signature and payload
   - Rejects invalid or malformed callbacks
4. Only verified data is used to authenticate the user

Unverified callbacks must never result in:
- User login
- Account creation
- Privilege escalation

---

## Client-Side Responsibilities

Client-side code is responsible only for:
- Initiating authentication or payment flows
- Redirecting users
- Displaying UI feedback

Client-side code must **not**:
- Decide whether a user is authenticated
- Decide whether a payment is valid
- Store or validate sensitive Pi data

---

## Logging and Monitoring

Applications should:
- Log failed verification attempts
- Monitor repeated invalid callbacks
- Treat abnormal callback patterns as potential abuse

Sensitive data should never be logged in plaintext.

---

## Payment Event Handling (If Applicable)

When handling Pi payment-related callbacks:

- Treat each callback as a discrete event
- Verify the event server-side before acting
- Ensure idempotency (callbacks may be retried)
- Do not assume ordering or uniqueness without verification

Business logic (e.g. granting access, delivering items) should only occur
after successful server-side verification.

---

## Threat Model Summary

This SDK is designed to protect against:
- Client-side manipulation
- Forged authentication callbacks
- Accidental API key exposure
- Improper trust in frontend state

It does **not**:
- Enforce application-specific authorization rules
- Replace your session or identity management
- Act as a blockchain or ledger security layer

---

## Responsibility Boundaries

| Component            | Responsibility                              |
|---------------------|----------------------------------------------|
| Pi Network           | Identity, wallet, and payment signaling     |
| `pi-sdk-nextjs`      | Secure verification and integration helpers |
| Your application     | Business logic, sessions, authorization     |

---

## Final Notes

Security is a shared responsibility.

This SDK provides safe primitives and recommended patterns, but application
developers are responsible for applying them correctly within their own
architecture.

When in doubt:
- Verify on the server
- Minimize trust
- Prefer explicit flows over implicit assumptions
