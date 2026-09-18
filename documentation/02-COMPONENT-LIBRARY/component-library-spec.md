# Component Library Specification

8 Core Components exist, each as an independent, reusable design component. Source: Button.dc.html, Link.dc.html, Input.dc.html, Select.dc.html, Checkbox.dc.html, Radio.dc.html, Badge.dc.html, IconButton.dc.html.

## Button
- **Purpose:** primary interactive action trigger.
- **Variants:** primary (solid ink #1C1B19), brand (solid #4A4FE4), secondary (outlined), tertiary (ghost).
- **States:** default, hover, active, focus, disabled, loading (spinner replaces label).
- **Sizing:** primary/secondary/brand 44px height; tertiary 34–36px.
- **Accessibility:** 2px #4A4FE4 focus outline; disabled uses cursor:not-allowed + muted colour, never colour alone.
- **Responsive:** `fullWidth` prop for stacked mobile/tablet CTAs.

## Link
- **Purpose:** secondary/inline navigational action.
- **Variants:** ink (body colour), brand (#4A4FE4).
- **States:** default, hover (underline), focus (2px outline, 3px offset — added Phase 1.1).
- **Sizing:** inline, follows surrounding text (12–13px typical).

## Input
- **Purpose:** free-text entry.
- **Types:** text, email, password, number.
- **States:** default, focus, filled, error (red border + message), success (green border + message — added Phase 1.1), disabled.
- **Sizing:** ~50px height, width:100% of parent (always fluid).
- **Accessibility:** error/success message rendered with icon + text below the field, never colour-only.

## Select
- **Purpose:** choosing one value from a short fixed list.
- **States:** default, focus, disabled.
- Same shape language as Input (50px height, 8px radius, fluid width).

## Checkbox
- **Purpose:** single independent binary choice.
- **States:** off, on, disabled.
- **Sizing:** 20×20px box, 4px radius, 10px gap to label.

## Radio (colour swatch)
- **Purpose:** selecting a garment colourway — a visual-swatch selector, not a generic radio input.
- **States:** unselected, selected (2px white + 4px ink ring).
- **Visual sizing:** 32px default (configurable via `size` prop), 8px radius.
- **Accessibility:** an invisible 44×44px hit-area is centred inside the button regardless of visual size (Phase 1.1 fix) — visual size never grows to meet the tap-target minimum.

## Badge
- **Purpose:** compact, non-interactive status label.
- **Variants (tones):** success (#EDF2EA/#41573B), error (#FDECEA/#C42B2B), info (#F4F4FE/#4A4FE4), neutral (#F3F0E9/#4A473F).
- **Sizing:** auto width, ~26px height, 999px radius. Never clickable.

## IconButton
- **Purpose:** icon-only action in dense toolbars/headers.
- **Icon set:** search, account, wishlist, cart, close, back, undo, grid, share, zoomin, zoomout, save (zoomin/zoomout/save added during Phase 4.2 to support the Studio Tablet/Mobile toolbar — additive, no existing icon changed).
- **States:** default, active (solid ink bg), hover, disabled (added Phase 1.1: muted icon colour, cursor not-allowed, no hover change).
- **Sizing:** 36×36px default (32px used in some Tablet toolbar contexts — confirm per instance). Below the 44px tap-target guideline — open, documented gap.

## Product Patterns (built from Core Components — not primitives)

| Pattern | Composed from | Appears in |
|---|---|---|
| Product Card | image placeholder, Badge, Button/Link, colour swatches | Homepage, Shop All/category pages, Search Results, Category Listing Tablet |
| Cart Item / Mini Cart | image, Button (qty stepper is custom, not a Core Component), Link | Cart drawer (Homepage/Shop All/Product Page), Cart Mobile/Tablet |
| Checkout Summary | line items, Input (promo code), Button | Checkout, Checkout Tablet/Mobile |
| Product Gallery | image mosaic/grid, no interactive Core Component | Product Page, Product Page Tablet/Mobile |
| Product Selector | Radio (colour), size chips (custom, not a Core Component), Link (size guide) | Product Page and its Tablet/Mobile variants |
| Category Grid | Product Card repeated in a responsive grid (4-up Desktop / 3-up Tablet / 2-up Mobile) | Shop All, category pages, Search Results, Category Listing Tablet/Mobile |

**NOT SPECIFIED:** a dedicated Quantity Selector or Toggle component does not exist as an independent Core Component — both are hand-built inline compositions repeated across pages (flagged as a candidate for future extraction, not created here per the "don't create components speculatively" rule).
