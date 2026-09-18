# Implementation Handoff

This is the ONLY place technology is named. Everything in `01`–`05` and `04` is technology-agnostic by design — do not read tech stack assumptions back into those documents.

## Intended stack
React / Next.js (frontend) + MedusaJS (commerce: products, cart, checkout, orders). **IMPLEMENTATION DECISION REQUIRED** on exact Next.js version/router (App vs Pages), state management library, and CSS approach (Tailwind/CSS Modules/styled-components/etc.) — none of this was decided in the design phase.

## Data boundaries (design vs. commerce logic)
| Concern | Owner |
|---|---|
| Appearance, tokens, Core Component contracts | Design System (this handoff) |
| Page composition, content shown, visual interaction | Page specs (`03-PAGES`) |
| Rendering, routing, application structure | Next.js — **NOT SPECIFIED** by design |
| Products, variants, pricing, cart, orders | Medusa — **NOT SPECIFIED** by design (no schema/entity names were invented) |
| Studio editor UI/behaviour | Studio spec (`04-DESIGN-STUDIO`) |
| Studio persistence (what gets saved, in what shape) | **NOT SPECIFIED** — no data model was represented in the approved Studio references |

## Known "populated dynamically" fields (Order Confirmation)
Delivery address and payment method are marked in the design as **"Populated dynamically from the Medusa order object"** / **"...by the connected payment provider"** — the exact object shape is an **IMPLEMENTATION DECISION REQUIRED**, not specified by the design.

## Payment refused
The Payment Refused reference screen is intentionally generic — **NOT SPECIFIED**: no gateway-specific decline reasons (insufficient funds, card declined, etc.) were assumed. Wire the shown copy shell to whatever message your Medusa payment provider actually returns.

## Forms
All forms (Checkout, Password Recovery, quote forms) use the Input/Select/Checkbox/Button Core Components and their documented validation visual states. Actual submission handling, validation rules beyond what's visually shown (e.g. required-field logic, email regex), and backend error mapping are **NOT SPECIFIED**.

## Studio
Canvas rendering, print-file generation, and any persistence of a user's design are **NOT SPECIFIED** at the data/API level — only the editor UI and its visual states are documented in `04-DESIGN-STUDIO`. Treat this as **IMPLEMENTATION DECISION REQUIRED** end to end.

## Explicit non-goals of this handoff
- No API endpoints are proposed.
- No Medusa entity/schema names are proposed.
- No routing structure is proposed.
- No state-management library is proposed.

Where the programmer must decide something not covered above, that is by definition **IMPLEMENTATION DECISION REQUIRED** — the design does not dictate it.
