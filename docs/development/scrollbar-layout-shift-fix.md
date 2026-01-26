# Scrollbar Layout Shift Fix - Documentation

## Problem Summary

The portfolio website was experiencing jarring layout shifts when opening and closing modal windows. This occurred because:

1. When a modal opened, the scrollbar would disappear (due to `overflow: hidden`)
2. The content would shift left by the scrollbar width (~17px)
3. When the modal closed, the scrollbar would reappear
4. The content would shift right again

This created a poor user experience with visible "jumping" of content.

## Root Causes Identified

1. **Reactive Scrollbar Handling**: Scrollbar width was being measured AFTER the modal started opening
2. **CSS Specificity Conflicts**: Lenis smooth scroll CSS rules were conflicting with modal-open styles
3. **Browser Compatibility**: The `scrollbar-gutter: stable` CSS property only works in modern browsers
4. **Timing Issues**: Scrollbar compensation wasn't applied synchronously with modal state changes

## Solution Implementation

### 1. Enhanced Scrollbar Utility (`lib/utils/scrollbar.ts`)

**Key Improvements:**
- Added `initScrollbarWidth()` function to measure scrollbar width on page load
- Improved caching mechanism to avoid repeated measurements
- Enhanced SSR safety checks
- Synchronous application of scrollbar compensation
- Better Lenis smooth scroll integration

**New Functions:**
```typescript
initScrollbarWidth()        // Initialize on app load
measureScrollbarWidth()     // Measure scrollbar width
getScrollbarWidth()         // Get cached value
applyScrollbarGutter()      // Apply compensation
removeScrollbarGutter()     // Remove compensation
```

### 2. Global CSS Updates (`styles/globals.css`)

**Changes Made:**
- Applied `scrollbar-gutter: stable` to both `html` and `body`
- Strengthened `body.modal-open` styles with `!important`
- Fixed Lenis-specific CSS conflicts
- Improved fallback for browsers without `scrollbar-gutter` support
- Ensured consistent use of `--scrollbar-width` CSS variable

**CSS Variables:**
```css
--scrollbar-width: [calculated on page load]
```

### 3. ScrollbarInit Component (`components/providers/scrollbar-init.tsx`)

**Purpose:**
- Initializes scrollbar width measurement on page load
- Runs before any modals can open
- Sets the `--scrollbar-width` CSS variable globally

**Usage:**
```tsx
<ScrollbarInit />  // Added to root layout
```

### 4. Layout Integration (`app/layout.tsx`)

**Changes:**
- Added `ScrollbarInit` component at the top of the body
- Ensures scrollbar width is calculated before React hydration completes

### 5. Modal Optimization (`components/features/contact/contact-modal.tsx`)

**Improvements:**
- Cleaner useEffect implementation
- Better cleanup logic
- More efficient scrollbar compensation timing

## Testing Checklist

### Manual Testing Steps

1. **Initial Load Test**
   - [ ] Open the website
   - [ ] Verify page loads without layout shifts
   - [ ] Check browser console for any errors

2. **Modal Open Test**
   - [ ] Click to open the contact modal
   - [ ] Verify NO horizontal layout shift occurs
   - [ ] Check that background content stays in place
   - [ ] Verify scrollbar space is maintained

3. **Modal Close Test**
   - [ ] Close the contact modal
   - [ ] Verify NO horizontal layout shift occurs
   - [ ] Check that scrollbar reappears smoothly
   - [ ] Verify content position is stable

4. **Repeated Open/Close Test**
   - [ ] Open and close modal 5-10 times rapidly
   - [ ] Verify consistent behavior each time
   - [ ] Check for any visual glitches or jumps

5. **Scroll Position Test**
   - [ ] Scroll page to middle position
   - [ ] Open modal
   - [ ] Verify scroll position is maintained
   - [ ] Close modal
   - [ ] Verify scroll position is still correct

6. **Browser Compatibility Test**
   - [ ] Test in Chrome (latest)
   - [ ] Test in Firefox (latest)
   - [ ] Test in Safari (latest)
   - [ ] Test in Edge (latest)

7. **Device Testing**
   - [ ] Test on desktop (1920x1080)
   - [ ] Test on laptop (1366x768)
   - [ ] Test on tablet (768px width)
   - [ ] Test on mobile (375px width)

8. **Zoom Level Test**
   - [ ] Test at 100% zoom
   - [ ] Test at 125% zoom
   - [ ] Test at 150% zoom
   - [ ] Verify behavior is consistent

### Technical Verification

1. **CSS Variable Check**
   ```javascript
   // In browser console:
   getComputedStyle(document.documentElement).getPropertyValue('--scrollbar-width')
   // Should return a value like "17px" or "0px"
   ```

2. **Modal-Open Class Check**
   ```javascript
   // When modal is open, in browser console:
   document.body.classList.contains('modal-open')
   // Should return true
   ```

3. **Scrollbar Width Measurement**
   ```javascript
   // In browser console:
   window.innerWidth - document.documentElement.clientWidth
   // Should match the --scrollbar-width value
   ```

4. **Lenis Integration Check**
   ```javascript
   // In browser console:
   window.lenis
   // Should exist if Lenis is initialized
   // Check .scroll property for current scroll position
   ```

## Browser Support

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome  | 94+     | Full (scrollbar-gutter native) |
| Firefox | 97+     | Full (scrollbar-gutter native) |
| Safari  | 15.4+   | Full (scrollbar-gutter native) |
| Edge    | 94+     | Full (scrollbar-gutter native) |
| Older   | Any     | Fallback (padding-right) |

## Performance Impact

- **Minimal**: Scrollbar width is measured once on page load
- **Cached**: Result is stored and reused for all modal interactions
- **Optimized**: No repeated DOM measurements during modal operations

## Troubleshooting

### Issue: Layout still shifts

**Possible Causes:**
1. Browser doesn't support `scrollbar-gutter` and fallback isn't working
2. Other CSS is overriding the modal-open styles
3. Scrollbar width wasn't calculated correctly

**Solution:**
1. Check if `--scrollbar-width` CSS variable is set
2. Verify `body.modal-open` class is applied when modal opens
3. Check browser console for JavaScript errors

### Issue: Scrollbar appears during modal

**Possible Causes:**
1. Modal content is not preventing scroll properly
2. Lenis isn't stopping correctly

**Solution:**
1. Verify `data-lenis-prevent` attribute is on modal content
2. Check that `applyScrollbarGutter()` is being called

### Issue: Scroll position jumps

**Possible Causes:**
1. Lenis scroll position not being preserved
2. Browser scroll restoration interfering

**Solution:**
1. Check the Lenis integration in `scrollbar.ts`
2. Verify `window.scrollTo()` is being called correctly

## Files Modified

1. `lib/utils/scrollbar.ts` - Enhanced scrollbar utilities
2. `styles/globals.css` - Updated modal and scrollbar styles
3. `components/providers/scrollbar-init.tsx` - New initialization component
4. `components/providers/index.ts` - Export new component
5. `app/layout.tsx` - Integrated ScrollbarInit
6. `components/features/contact/contact-modal.tsx` - Optimized modal

## Future Considerations

1. **Multiple Modals**: If implementing nested or multiple simultaneous modals, ensure only one `modal-open` class application
2. **Animation Library Updates**: If Lenis is updated, verify integration still works
3. **New Modals**: Any new modal components should follow the same pattern as contact-modal.tsx
4. **Browser Updates**: Monitor browser support for `scrollbar-gutter` as it improves

## References

- [CSS scrollbar-gutter MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-gutter)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Radix UI Dialog](https://www.radix-ui.com/docs/primitives/components/dialog)