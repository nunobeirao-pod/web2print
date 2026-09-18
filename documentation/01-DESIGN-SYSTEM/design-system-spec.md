# Design System Specification

Technology-agnostic. Source: `Design System.dc.html`.

## 1. Colour tokens

### Primitive → Semantic mapping
Several semantic roles currently share the same primitive value — intentional starting point, not a merge (each can be repointed independently later).

| Semantic role | Primitive (hex) | RGB | HSL |
|---|---|---|---|
| color.brand | #4A4FE4 | 74,79,228 | 238°,74%,59% |
| color.link | #4A4FE4 | 74,79,228 | 238°,74%,59% |
| color.focus | #4A4FE4 | 74,79,228 | 238°,74%,59% |
| color.text (primary) | #1C1B19 | 28,27,25 | 40°,6%,10% |
| color.text (muted) | #4A473F | 74,71,63 | 44°,8%,27% |
| color.text (subtle) | #8B867B | 139,134,123 | 41°,6%,51% |
| color.text (faint) | #B8B2A5 | 184,178,165 | 41°,12%,68% |
| color.surface (page) | #FBFAF8 | 251,250,248 | 40°,27%,98% |
| color.surface (card) | #FFFFFF | 255,255,255 | 0°,0%,100% |
| color.surface (tint) | #F3F0E9 / #F1EEE8 / #EFEBE2 | — | — |
| color.border (default) | #E6E2D8 | 230,226,216 | 43°,22%,87% |
| color.border (input) | #DDD8CC | 221,216,204 | 42°,20%,83% |
| color.border (divider) | #EEEBE3 | — | — |
| color.success | #41573B (ink) / #EDF2EA (bg) | — | — |
| color.warning | #A34B33 | 163,75,51 | 13°,52%,42% |
| color.info | #4A4FE4 (reused brand) | — | — |
| color.error | #C42B2B (ink) / #FDECEA (bg) | — | — |

### Interactive-state derived tokens
| Token | Hex | Usage |
|---|---|---|
| Ink Hover | #3A3833 | Hover bg for solid ink (#1C1B19) buttons |
| Brand Hover | #3B40C9 | Hover bg for solid brand-blue buttons |
| Brand Tint | #F4F4FE | Selected/active light backgrounds |
| Brand Disabled | #C9CBF5 | Disabled solid brand-blue button |
| Avatar Bg | #3E4A5C | Signed-in account avatar |
| Destructive Hover Bg | #F7EBE7 | Hover bg behind destructive menu items (e.g. "Log out") |

## 2. Typography

Single family throughout: `'Helvetica Neue', Helvetica, Arial, sans-serif`. (User-authored canvas text inside the Studio uses a separate ~14-font content palette — not a UI token.)

| Style | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Display / Hero | 52px | 700 | 1.1 | -0.01em |
| H1 | 26px | 700 | 1.2 | -0.01em |
| H2 | 19px | 600 | 1.3 | -0.01em |
| H3 | 16px | 600 | 1.3 | normal |
| H4 | 14.5px | 600 | 1.4 | normal |
| Body Large | 15px | 500 | 1.5 | normal |
| Body | 14px | 400 | 1.5 | normal |
| Body Small | 13px | 400 | 1.5 | normal |
| Caption | 12px | 400 | 1.4 | normal |
| Label | 12.5px | 500 | 1.3 | normal |
| Button | 14px | 600 | 1 | normal |

## 3. Spacing

**Global spacing tokens:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 (px). Used for gaps, margins, section rhythm.

**Component-specific tokens** (documented per component, not arbitrary): `button.height` 44px, `input.height` ~50px, `header.height` 56–68px (Studio top bar is 56px; site nav is 64–68px).

**Page gutters (resolved contradiction):** Desktop 48px · Tablet 32px · Mobile **16px** (corrected from an earlier doc value of 20px — 16px is what the approved Mobile files actually use).

## 4. Radius

| Value | Usage |
|---|---|
| 4px | Checkbox corners |
| 7px | Toolbar buttons |
| 8px | Inputs, buttons, thumbnails |
| 10px | Popovers, dropdown menus |
| 12px | Cards |
| 14px | Cart line items |
| 16px | Modals, large panels |
| 50% | Avatars, dots, close buttons |
| 999px | Primary buttons, badges, pills |

## 5. Shadows

| Tier | Value | Usage |
|---|---|---|
| sm | `0 8px 24px rgba(28,27,25,0.08)` | Share/add-product popovers |
| md | `0 12px 32px rgba(28,27,25,0.14)` | Language/account dropdowns |
| lg | `0 24px 64px rgba(28,27,25,0.20)` | Lead-capture modal, full overlays |

## 6. Breakpoints & containers

- Mobile: **<768px** — page gutter 16px
- Tablet: **768–1023px** — page gutter 32px, no max-width below the Desktop cap
- Desktop: **≥1024px** — content max-width 1440px, page gutter 48px

Rule inherited from Phase 3A.4 fix: never a fixed-px container width — always `width:100%;max-width:X`.

## 7. Foundation / Accessibility

- Focus: 2px solid #4A4FE4 outline (1–3px offset depending on component) on every interactive Core Component.
- Tap targets: Button ≥44px height; Radio (colour swatch) has an invisible 44×44px hit-area around its visual swatch (Phase 1.1); size chips 44×44px.
- Open gap: IconButton is 36×36px by default — below the 44px guideline. Never silently resized (shared across toolbars); flagged for an explicit decision.
- Disabled: distinguishable by both colour (muted) and cursor (not-allowed), never colour alone.
- Error/success messaging: always icon + text, never colour-only.

## 8. States (foundation-level)

Loading, Empty, Error, Validation, Success, Disabled, Focus, Payment refused, Search no results — see `../05-RESPONSIVE/responsive-spec.md` and `../03-PAGES/pages-spec.md` for where each appears.

## Architecture layers

1. **Design Tokens** (this document, §1–6)
2. **Foundation/Accessibility** (§7)
3. **Core Components** — see `../02-COMPONENT-LIBRARY/`
4. **Product Patterns** — Product Card, Cart Item, Checkout Summary, Product Gallery, Product Selector, Category Grid — built FROM Core Components, documented in `../03-PAGES/`
5. **Studio Patterns** — see `../04-DESIGN-STUDIO/`
6. **Implementation** — see `../06-IMPLEMENTATION-HANDOFF/` — NOT part of the Design System itself
