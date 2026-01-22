---
name: responsive-design
description: Implement modern responsive layouts using the project's specific "Fluid Pixel" strategy. Focuses on explicit clamp() precision, hybrid mobile-first/desktop-locking breakpoints, and dynamic viewport units for polished, adaptive interfaces.
---

This skill guides the implementation of responsive interfaces using the project's specific "Fluid + Precision" strategy. Unlike generic responsive patterns, this approach relies on explicit pixel bounds within `clamp()` to ensure exact design fidelity across all devices while maintaining fluid transitions.

## Core Strategy: Fluid Pixel Precision

The project eschews simple relative units (rem/em) in favor of **explicit pixel bounds** within fluid functions. This ensures components never shrink below a usable size or grow beyond their designed maximum.

- **Typography**: `text-[clamp(min_px, preferred_vw, max_px)]`
- **Spacing**: `p-[clamp(min_px, preferred_vw, max_px)]`
- **Constraints**: `max-w-[min(max_px, 90vw)]` (The "Breakout" Pattern)

## Implementation Guidelines

### 1. Typography & Spacing
Always use `clamp()` for layout-critical dimensions.
- **Hero Headings**: `text-[clamp(28px,6vw,44px)]`
- **Section Padding**: `px-[clamp(16px,4vw,60px)]` / `py-[clamp(60px,10vh,100px)]`
- **Fluid Gaps**: Use `gap-fluid-sm`, `gap-fluid-md`, `gap-fluid-lg` (configured in `tailwind.config.js`).

### 2. Hybrid Breakpoint Strategy
Combine mobile-first utilities with explicit "locks" for specific device classes.
- **Expansion**: Use standard `sm:`, `lg:`, `xl:` for grid/flex layout shifts.
- **Precision Overrides**: Use `max-sm:` and `max-lg:` to *enforce* specific values on smaller screens where fluid scaling might not be sufficient.
    - *Example*: `max-sm:py-[60px]` (Locks vertical padding on mobile).
    - *Example*: `max-lg:flex-col-reverse` (Changes flex direction specifically for tablets/mobile).

### 3. Layout Architecture
- **Full-Screen Sections**: Always use `min-h-dvh` (Dynamic Viewport Height) to prevent layout jumps on mobile browsers.
- **Container Alignment**: Standard wrapper is `w-full max-w-[1400px] flex flex-col items-center`.
- **Navbar Clearance**: Add `scroll-mt-20` to section containers to ensure the fixed navbar doesn't obscure content when linking to anchors.

### 4. Visual Adaptation
- **Glassmorphism**: Use `backdrop-blur-xl` and `backdrop-saturate-180` with `bg-white/5` (or similar) for overlays.
- **Motion Safety**: **CRITICAL**: All animations (fade-in, pulse, scroll) must have a `motion-reduce:animate-none` variant.
- **Performance**: For heavy graphical elements (Canvas/WebGL), use `max-lg:` classes to adjust brightness/contrast or hide them entirely if they degrade mobile performance.

## Component Patterns

### The Standard Section Wrapper
```tsx
<section className={cn(
  "min-h-dvh px-[clamp(16px,4vw,60px)] py-[clamp(60px,10vh,100px)]",
  "flex flex-col justify-center items-center relative",
  "max-sm:py-[60px]" // explicit mobile lock
)}>
  <div className={cn(
    "w-full max-w-[1400px] flex flex-col items-center",
    "gap-fluid-lg"
  )}>
    {/* Content */}
  </div>
</section>
```

### The Fluid Text Block
```tsx
<h1 className={cn(
  "text-[clamp(26px,3.2vw,48px)]",
  "font-primary font-medium leading-tight",
  "max-w-[min(900px,90vw)]" // Constraint pattern
)}>
  Your Heading
</h1>
```

## Global CSS Variables
Refer to `globals.css` for semantic scaling variables:
- `--text-xl`: `clamp(1.25rem, 1rem + 1.25vw, 1.5rem)`
- `--space-lg`: `clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)`
- `--container-padding`: `clamp(16px, 4vw, 60px)`