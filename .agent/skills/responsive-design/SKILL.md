<skill_name>responsive-design</skill_name>
<description>
  Applies the project's specific responsive design strategy, emphasizing fluid typography/spacing via `clamp()`, hybrid breakpoint usage (`max-sm`/`max-lg` overrides), and `min-h-dvh` layouts. Use this for all UI implementation tasks.
</description>
<instructions>
  When implementing or refactoring UI components, adhere strictly to the following responsive design patterns observed in the codebase:

  ## 1. Fluid Typography & Spacing (The Core Strategy)
  Instead of static values that jump at breakpoints, use fluid scaling.
  - **Typography:** Use the configured fluid utilities (e.g., `text-fluid-base`, `text-fluid-xl`) or raw `clamp()` for specific hero text.
    - *Pattern:* `text-[clamp(min_px, viewport_calc, max_px)]`
  - **Spacing (Padding/Gap):** Use fluid spacing for section containers and major gaps.
    - *Horizontal Padding:* `px-[clamp(16px,4vw,60px)]` (Standard container padding)
    - *Vertical Padding:* `py-[clamp(60px,10vh,100px)]` (Section vertical spacing)
    - *Gaps:* `gap-fluid-md`, `gap-fluid-lg`

  ## 2. Layout Structure
  - **Section Containers:** Always constrain max width on large screens while maintaining 100% width.
    - *Pattern:* `w-full max-w-[1400px] flex flex-col items-center`
  - **Viewport Height:** Use dynamic viewport units for full-screen sections to handle mobile browser bars correctly.
    - *Pattern:* `min-h-dvh` (instead of `min-h-screen`)

  ## 3. Breakpoint Strategy (Hybrid)
  Combine standard mobile-first classes with explicit "max-width" overrides for complex responsive adjustments.
  - **Grid/Flex Switching:** Use standard classes for basic layout shifts.
    - *Example:* `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
  - **Targeted Overrides:** Use `max-sm:` and `max-lg:` to enforce specific behaviors on tablets/mobiles that deviate from the fluid base.
    - *Example:* `max-lg:flex-col`, `max-sm:py-[60px]` (locking a value on mobile), `max-lg:hidden` (hiding desktop nav).

  ## 4. Component Patterns
  - **Navbar/Header:** Fixed, backdrop-blur, handles mobile menu visibility.
    - `fixed top-0 w-full z-[1000] ... max-lg:px-4`
  - **Cards/Bento Grids:**
    - Use `row-span` and `col-span` adjustments.
    - *Example:* `sm:max-lg:col-span-2` (Spans full width on tablets).
  - **Hero Sections:**
    - Adjust text alignment and flex direction.
    - *Example:* `max-sm:text-center`, `max-lg:flex-col-reverse`.

  ## 5. Visual & Motion Adaptations
  - **Motion Reduction:** Always include `motion-reduce:animate-none` for accessibility.
  - **Complex Backgrounds:** Simplify or hide complex glows/animations on mobile if they impact performance or readability.
    - *Example:* `max-sm:hidden` on scroll indicators or heavy canvas elements if necessary.

  ## 6. Example Snippet
  ```tsx
  <section className={cn(
    // Base Fluid Layout
    "min-h-dvh px-[clamp(16px,4vw,60px)] py-[clamp(60px,10vh,100px)]",
    "flex flex-col justify-center items-center relative",
    // Mobile/Tablet Specific Overrides
    "max-sm:py-[60px]", 
    "max-lg:py-[80px]"
  )}>
    <div className={cn(
      "w-full max-w-[1400px] grid gap-fluid-lg",
      "grid-cols-1 lg:grid-cols-2" // Mobile-first grid
    )}>
      {/* Content */}
    </div>
  </section>
  ```
</instructions>
