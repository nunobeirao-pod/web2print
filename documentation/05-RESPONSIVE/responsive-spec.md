# Responsive Specification

Breakpoints: Mobile <768px · Tablet 768–1023px · Desktop ≥1024px. (Studio's own `narrow` mode triggers at <1180px — wider than the site's Tablet range, and is Studio-specific, not a site-wide breakpoint.)

## Container / gutter
| Breakpoint | Side padding | Max-width |
|---|---|---|
| Desktop | 48px | 1440px |
| Tablet | 32px | none (fluid) below the Desktop cap |
| Mobile | 16px | none (fluid) |

**Rule (Phase 3A.4, permanent):** never a fixed-px container width. Always `width:100%;max-width:X` where a cap is needed.

## Navigation
- Desktop: full inline nav (logo, links, search/account/wishlist/cart icons). Gaps use `clamp(10px,1.1vw,18px)` so it compresses instead of overflowing.
- Tablet: **same Desktop inline pattern** — the clamp-based compression already works down to 768px; no hamburger was introduced at Tablet.
- Mobile: hamburger → full-screen overlay menu (see Mobile Navigation.dc.html) — accordion for Shop sub-links, stacked top-level items (44px+ tap rows).

## Grids
| Content | Desktop | Tablet | Mobile |
|---|---|---|---|
| Product/category grids | 4-up | 3-up | 2-up |
| Reviews | 4-up (Homepage) / 3-up (Product Page — already 3-up on Desktop) | 3-up | stacked/1-up where built |
| Category tiles, "Trending", "Volume pricing", "From screen to garment" (5 items) | horizontal scroll | horizontal scroll (kept, not forced into a grid) | horizontal scroll |
| Collections/Templates (Inspiration) | 3-up | 2-up | 1-up |
| Features (For Teams) | 4-up | 2-up | 1-up |

## Drawers / overlays
- Cart & Auth drawers: `width:460px;max-width:100vw` on Desktop — already safe at any width, no Tablet/Mobile-specific version needed.
- Studio inspector: docked sidebar (Desktop wide) → absolute overlay (Tablet, Desktop narrow) → bottom sheet (Mobile).
- Filters: inline dropdown-on-pill-button (Desktop, kept through Tablet) → bottom sheet (Mobile).

## Sticky/fixed elements
- Product Page CTA: lives inside the sticky two-column info panel on Desktop/Tablet; becomes a separate floating sticky bottom bar on Mobile (image + CTA) since one column can't hold both the info panel and full-width content.
- Cart Mobile/Tablet: Checkout CTA at the bottom of the Order Summary card (not page-fixed).
- Studio: Add to Order CTA lives in the docked/overlay inspector (Desktop/Tablet) or a fixed bottom bar (Mobile).

## States reused verbatim across breakpoints (never redesigned per-breakpoint)
Loading/skeleton, Empty, Error, Validation, Success, Payment refused, Search no results — same markup/copy at every breakpoint, only container/grid sizing changes.

## Accessibility carried across breakpoints
- Radio (colour swatch): 44×44px invisible hit-area regardless of visual size (32px default) — Phase 1.1.
- Button/Input/Select: ≥44/≥50px height at every breakpoint.
- IconButton: 36×36px at every breakpoint — flagged open gap, not silently changed.
