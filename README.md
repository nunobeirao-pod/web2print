# WEB2PRINT — DESIGN & DEVELOPER HANDOFF

## Project Overview

This repository contains the approved visual design, Design System, Design Studio (product configurator), and full developer handoff documentation for Web2Print — ready for implementation in Next.js + Medusa (or an equivalent stack) by a development team.

**The files in this repository represent the approved design reference. Do not modify approved design decisions without explicit approval.**

This repository is a design/handoff package. It is **not** a Next.js or Medusa application — no framework code, APIs, or commerce logic have been created here.

## Source of Truth (in order of authority)

1. Approved Design System — `Design System.dc.html`
2. Approved Desktop pages
3. Approved Tablet pages
4. Approved Mobile pages
5. Approved Studio Desktop — `Studio Desktop.dc.html`
6. Approved Studio Tablet — `Studio Tablet.dc.html`
7. Approved Studio Mobile — `Studio Mobile.dc.html`
8. Developer Handoff (`documentation/`, `handoff/`)
9. Implementation Handoff (`documentation/06-IMPLEMENTATION-HANDOFF/`)

No conflicts between these sources were found during preparation. If one is ever found during implementation: **SOURCE CONFLICT — REVIEW REQUIRED**, do not resolve it silently.

## Repository Structure

```
/
├── README.md                     ← you are here
├── CHANGELOG.md
├── .gitignore
├── *.dc.html                     ← ALL approved design files (Design System, Components, Pages, Studio)
├── studio-data.js, support.js, image-slot.js   ← runtime files the design components depend on
├── assets/                       ← image/mask assets used by the Studio
├── documentation/                ← Phase 5 developer documentation (this handoff)
│   ├── 01-DESIGN-SYSTEM/
│   ├── 02-COMPONENT-LIBRARY/
│   ├── 03-PAGES/
│   ├── 04-DESIGN-STUDIO/
│   ├── 05-RESPONSIVE/
│   ├── 06-IMPLEMENTATION-HANDOFF/
│   └── 07-FINAL-REFERENCE/
└── handoff/
    ├── WEB2PRINT-DEVELOPER-HANDOFF.md
    └── FILE-INVENTORY.md
```

### Why the design files were NOT moved into `design/design-system/`, `design/components/`, `design/pages/desktop|tablet|mobile/`, `design/studio/`

Every design file (`.dc.html`) references its Core Components (Button, Link, Input, Select, Checkbox, Radio, Badge, IconButton) and shared runtime files (`support.js`, `image-slot.js`, `studio-data.js`) by **sibling filename in the same directory**. Moving them into a nested folder structure would break every one of those references across ~45 files simultaneously, with no reliable way to verify the fix without re-testing every page.

Per this phase's own instruction ("se a reorganização física puder alterar referências internas..., NÃO fazer a movimentação automaticamente"), **the physical location of every approved design file was preserved exactly as-is, at the project root.** `FILE-INVENTORY.md` maps every real file to its logical category (Design System / Component / Page — Desktop/Tablet/Mobile / Studio / Documentation) so a developer can navigate the flat structure by category without the files having moved.

If a developer wants a nested folder structure for their own repo, that reorganization — including fixing every `dc-import`/relative reference — is an implementation-time task, not a design-handoff task.

## Design System

See `documentation/01-DESIGN-SYSTEM/design-system-spec.md` (docs) and `Design System.dc.html` (the canonical, browsable reference — open it directly). Covers tokens (primitive + semantic), typography, spacing, radius, shadows, breakpoints, and foundation/accessibility rules. Technology-agnostic by design.

## Components

8 Core Components: Button, Link, Input, Select, Checkbox, Radio, Badge, IconButton — each its own `.dc.html` file at the project root. Full contracts in `documentation/02-COMPONENT-LIBRARY/component-library-spec.md`. Product Patterns (Product Card, Cart Item, Checkout Summary, Product Gallery, Product Selector, Category Grid) are compositions of Core Components, not primitives — documented in `documentation/03-PAGES/`.

## Pages

Every approved Desktop/Tablet/Mobile page is listed with its exact filename in `documentation/07-FINAL-REFERENCE/reference-map.md` and detailed in `documentation/03-PAGES/pages-spec.md`.

## Responsive

Breakpoints: Mobile <768px · Tablet 768–1023px · Desktop ≥1024px. Full grid/container/navigation/drawer rules in `documentation/05-RESPONSIVE/responsive-spec.md`.

## Design Studio

The product configurator (`Studio Desktop.dc.html`, `Studio Tablet.dc.html`, `Studio Mobile.dc.html`) is a first-class part of this handoff, not a secondary prototype. Full spec — toolbar, canvas, inspector/tools, colour/text/shapes/stickers/layers, states, known gaps — in `documentation/04-DESIGN-STUDIO/design-studio-spec.md`.

## States

Loading, Empty, Error, Validation, Success, Payment refused, Search no results — documented per-page in `03-PAGES` and cross-cutting in `05-RESPONSIVE`. States are reused verbatim across breakpoints, never redesigned per device.

## Implementation Handoff

`documentation/06-IMPLEMENTATION-HANDOFF/implementation-handoff.md` — the ONLY place Next.js/React/Medusa are discussed. Kept strictly separate from the technology-agnostic Design System.

## Known Gaps

- Studio Mobile: Shapes/Stickers/Layers tabs are navigable but their internal tool content wasn't expanded in the reference — **KNOWN GAP, NOT A REGRESSION**.
- Studio Upload flow — **NOT SPECIFIED** (no upload UI exists in any approved reference).
- IconButton default 36×36px — below the 44px tap-target guideline, flagged since Phase 1.1, never silently resized.

## NOT SPECIFIED

Medusa schema/entity names, API endpoints, routing structure, state-management library, Studio design-persistence data model, exact "populated dynamically" data shape for Order Confirmation, payment-gateway decline-reason copy. See `documentation/06-IMPLEMENTATION-HANDOFF/` for the full list.

## Developer Checklist

See `documentation/07-FINAL-REFERENCE/developer-checklist.md` before considering any part of the implementation complete.

## Important Rules

- Do not modify approved design decisions without explicit approval.
- Do not treat "NOT SPECIFIED" items as invitations to invent — raise them with product/design first.
- Do not silently resolve a source conflict if one is ever found.
- This repository is a design reference, not a running application.

## Security

A project-wide scan for API keys, tokens, secrets and credentials was run before packaging this repository. **No secrets were found.** The only "password"-related matches are UI `<input type="password">` fields inside the Authentication/Checkout login forms — placeholder form fields, not embedded credentials.

## Responsive Preview / Netlify

`Responsive Preview Standalone.html` (plus its `responsive-preview/index.html` copy) is a standalone, dependency-free HTML file used to visually validate the Mobile/Desktop breakpoint switch on Netlify. It remains a **visual reference/QA tool**, not part of the Next.js implementation — do not build application logic on top of it.
