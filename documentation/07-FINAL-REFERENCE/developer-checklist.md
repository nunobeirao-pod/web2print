# Developer Checklist

Use this to verify an implementation reproduces the approved design — not to redesign anything.

## Design System
- [ ] All colour tokens (primitive + semantic) match §1 of the Design System spec exactly
- [ ] Typography scale matches §2 exactly (sizes, weights, line-heights, letter-spacing)
- [ ] Spacing scale (4/8/12/16/24/32/48/64/80/96) used consistently; component-specific tokens documented, not hardcoded ad hoc
- [ ] Radius and shadow tiers match §4–5
- [ ] Breakpoints match §6 (Mobile <768, Tablet 768–1023, Desktop ≥1024)

## Components
- [ ] Button: 4 variants, all states incl. loading, ≥44px height
- [ ] Link: ink/brand tones, visible focus ring
- [ ] Input/Select: default/focus/filled/error/success/disabled all implemented
- [ ] Checkbox/Radio: correct visual size AND correct 44×44px tap target for Radio
- [ ] Badge: 4 tones, never interactive
- [ ] IconButton: default/active/hover/disabled; icon set matches documented list

## Pages
- [ ] Every page in the reference map exists at the breakpoints listed
- [ ] No invented copy, CTAs, prices, or links — verify against the source `.dc.html` files
- [ ] "NOT SPECIFIED" items are flagged to product/business owner before implementation, not guessed

## Responsive
- [ ] Zero horizontal overflow at 320/360/375/390/393 (Mobile), 768/834/1024 (Tablet), and Desktop width
- [ ] Intentional horizontal scroll (category tiles, Trending, Volume pricing, etc.) preserved, not converted to a grid
- [ ] No fixed-px container widths anywhere (`width:100%;max-width:X` pattern)

## States
- [ ] Loading/Empty/Error/Validation/Success/Payment refused/Search no results all implemented exactly as documented, reused across breakpoints

## Studio
- [ ] Desktop's `narrow` behaviour (<1180px) is reproduced faithfully at Tablet
- [ ] Mobile bottom-sheet tool pattern implemented; Shapes/Stickers/Layers tabs present even though content isn't expanded in the reference (build them out per actual product requirements)
- [ ] Print-area warning states (cut off / fully outside) implemented with correct colours

## Accessibility
- [ ] Focus rings visible on every interactive element
- [ ] Error/success never colour-only
- [ ] IconButton 36px gap flagged to design/product before deciding whether to enlarge

## Commerce integration (Medusa)
- [ ] No schema/entity names assumed from the design — confirm with backend/business before building
- [ ] "Populated dynamically" fields (Order Confirmation address/payment) wired to real Medusa order data
- [ ] Payment Refused screen wired to actual gateway decline messages, not the generic placeholder

## Testing
- [ ] Visual regression check against the original `.dc.html` references before sign-off
- [ ] All "IMPLEMENTATION DECISION REQUIRED" items resolved and documented before this checklist is considered complete

## Known gaps carried into implementation
- [ ] Studio Mobile Shapes/Stickers/Layers — expand per real requirements (was never removed, just not detailed in the reference)
- [ ] Studio Upload flow — NOT SPECIFIED, define with product before building
- [ ] IconButton 36px vs 44px tap target — decide before shipping to touch devices
