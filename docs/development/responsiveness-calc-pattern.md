# Responsive Design Calculation Patterns

## Overview

This document outlines the responsive design calculation patterns and breakpoints used throughout the portfolio website to ensure consistent, mobile-first responsive behavior.

## Breakpoint Strategy

### Mobile-First Approach
The project follows a mobile-first responsive design strategy, starting with mobile layouts and progressively enhancing for larger screens.

### Breakpoint Definitions

```css
/* Base styles (mobile-first) */
/* Default styles apply to mobile and small devices */

/* Small devices (tablets) */
@media (min-width: 640px) {
  /* Tablet styles */
}

/* Medium devices (small laptops) */
@media (min-width: 768px) {
  /* Small laptop styles */
}

/* Large devices (desktops) */
@media (min-width: 1024px) {
  /* Desktop styles */
}

/* Extra large devices (large desktops) */
@media (min-width: 1280px) {
  /* Large desktop styles */
}

/* Ultra-wide devices */
@media (min-width: 1536px) {
  /* Ultra-wide styles */
}
```

## CSS Custom Properties for Responsive Design

### Spacing System
```css
:root {
  /* Mobile-first spacing */
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
  
  /* Responsive spacing adjustments */
  --spacing-responsive-sm: clamp(0.5rem, 2vw, 1rem);
  --spacing-responsive-md: clamp(1rem, 3vw, 1.5rem);
  --spacing-responsive-lg: clamp(1.5rem, 4vw, 2.5rem);
}
```

### Typography Scale
```css
:root {
  /* Base typography scale */
  --text-xs: 0.75rem;       /* 12px */
  --text-sm: 0.875rem;      /* 14px */
  --text-base: 1rem;        /* 16px */
  --text-lg: 1.125rem;      /* 18px */
  --text-xl: 1.25rem;       /* 20px */
  --text-2xl: 1.5rem;       /* 24px */
  --text-3xl: 1.875rem;     /* 30px */
  --text-4xl: 2.25rem;      /* 36px */
  --text-5xl: 3rem;         /* 48px */
  
  /* Responsive typography */
  --text-responsive-sm: clamp(0.875rem, 2vw, 1rem);
  --text-responsive-md: clamp(1rem, 3vw, 1.25rem);
  --text-responsive-lg: clamp(1.25rem, 4vw, 1.75rem);
  --text-responsive-xl: clamp(1.5rem, 5vw, 2.5rem);
}
```

### Container Sizes
```css
:root {
  /* Container max-widths */
  --container-xs: 20rem;     /* 320px */
  --container-sm: 24rem;     /* 384px */
  --container-md: 28rem;     /* 448px */
  --container-lg: 32rem;     /* 512px */
  --container-xl: 36rem;     /* 576px */
  --container-2xl: 42rem;    /* 672px */
  --container-3xl: 48rem;    /* 768px */
  --container-4xl: 56rem;    /* 896px */
  --container-5xl: 64rem;    /* 1024px */
  --container-6xl: 72rem;    /* 1152px */
  --container-7xl: 80rem;    /* 1280px */
  
  /* Responsive containers */
  --container-responsive: clamp(100%, 90vw, 1200px);
}
```

## Component Responsive Patterns

### Grid Systems

#### CSS Grid Approach
```css
.responsive-grid {
  display: grid;
  gap: var(--spacing-md);
  grid-template-columns: 1fr;
  
  /* Tablet and up */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Desktop and up */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
}
```

#### Flexbox Approach
```css
.responsive-flex {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  
  /* Tablet and up */
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.flex-item {
  flex: 1 1 100%;
  min-width: 0;
  
  /* Tablet and up */
  @media (min-width: 768px) {
    flex: 1 1 calc(50% - var(--spacing-md));
  }
  
  /* Desktop and up */
  @media (min-width: 1024px) {
    flex: 1 1 calc(33.333% - var(--spacing-lg));
  }
}
```

### Card Components
```css
.card {
  width: 100%;
  max-width: var(--container-sm);
  padding: var(--spacing-md);
  
  /* Responsive padding */
  @media (min-width: 768px) {
    padding: var(--spacing-lg);
  }
  
  @media (min-width: 1024px) {
    padding: var(--spacing-xl);
    max-width: var(--container-md);
  }
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
}
```

### Navigation Components
```css
.nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  
  /* Mobile hamburger menu */
  &--mobile {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--nav-bg);
    padding: var(--spacing-md);
  }
  
  /* Tablet and up */
  @media (min-width: 768px) {
    flex-direction: row;
    gap: var(--spacing-lg);
    
    &--mobile {
      display: flex;
      position: static;
      flex-direction: row;
      background: transparent;
      padding: 0;
    }
  }
}
```

### Hero Section Responsive Pattern
```css
.hero {
  padding: var(--spacing-2xl) var(--spacing-md);
  text-align: center;
  
  /* Responsive padding */
  @media (min-width: 768px) {
    padding: var(--spacing-3xl) var(--spacing-lg);
    text-align: left;
  }
  
  @media (min-width: 1024px) {
    padding: var(--spacing-4xl) var(--spacing-xl);
  }
}

.hero__title {
  font-size: var(--text-responsive-lg);
  line-height: 1.2;
  margin-bottom: var(--spacing-md);
  
  /* Responsive font size */
  @media (min-width: 768px) {
    font-size: var(--text-responsive-xl);
  }
  
  @media (min-width: 1024px) {
    font-size: var(--text-4xl);
  }
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
```

## Image Responsive Patterns

### Responsive Images
```css
.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  
  /* Aspect ratio control */
  &--hero {
    aspect-ratio: 16/9;
    
    @media (max-width: 767px) {
      aspect-ratio: 4/3;
    }
  }
  
  &--card {
    aspect-ratio: 16/10;
    
    @media (min-width: 1024px) {
      aspect-ratio: 3/2;
    }
  }
}
```

### Next.js Image Optimization
```tsx
// Responsive image component
const ResponsiveImage = ({ 
  src, 
  alt, 
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn("responsive-image", className)}
      sizes={sizes}
      priority={false}
      loading="lazy"
    />
  );
};

// Usage examples
<ResponsiveImage
  src="/hero-image.jpg"
  alt="Hero image"
  sizes="100vw"
  className="hero__image"
/>

<ResponsiveImage
  src="/project-thumbnail.jpg"
  alt="Project thumbnail"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="card__image"
/>
```

## Layout Responsive Patterns

### Main Layout
```css
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
  .layout__header {
    position: sticky;
    top: 0;
    z-index: 50;
  }
  
  .layout__main {
    flex: 1;
    padding: var(--spacing-md);
    
    @media (min-width: 768px) {
      padding: var(--spacing-lg);
    }
    
    @media (min-width: 1024px) {
      padding: var(--spacing-xl);
    }
  }
  
  .layout__footer {
    margin-top: auto;
  }
}
```

### Sidebar Layout
```css
.sidebar-layout {
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: var(--spacing-xl);
  }
}

.sidebar-layout__sidebar {
  order: 2;
  width: 100%;
  
  @media (min-width: 1024px) {
    order: 1;
    width: 300px;
    flex-shrink: 0;
  }
}

.sidebar-layout__content {
  order: 1;
  flex: 1;
  
  @media (min-width: 1024px) {
    order: 2;
  }
}
```

## Animation and Transition Patterns

### Responsive Animations
```css
/* Disable animations on mobile for performance */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Responsive animation delays */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  
  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Stagger animations on larger screens */
  @media (min-width: 768px) {
    &:nth-child(2) { transition-delay: 0.1s; }
    &:nth-child(3) { transition-delay: 0.2s; }
    &:nth-child(4) { transition-delay: 0.3s; }
  }
}
```

## Performance Considerations

### Mobile Performance
- **Image Optimization**: Use Next.js Image component with appropriate sizes
- **Lazy Loading**: Implement lazy loading for below-the-fold content
- **Reduced Motion**: Respect `prefers-reduced-motion` for accessibility
- **Touch Targets**: Ensure minimum 44px touch targets on mobile

### CSS Optimization
```css
/* Critical CSS (inline in head) */
/* Non-critical CSS (loaded asynchronously) */

/* Use CSS containment for performance */
.performance-optimized {
  contain: layout style paint;
}

/* Reduce repaints */
.smooth-animations {
  will-change: transform, opacity;
}
```

## Testing Responsive Design

### Breakpoint Testing
```javascript
// Test responsive breakpoints
const testBreakpoints = () => {
  const breakpoints = [
    { name: 'mobile', width: 375 },
    { name: 'tablet', width: 768 },
    { name: 'desktop', width: 1024 },
    { name: 'wide', width: 1440 }
  ];
  
  breakpoints.forEach(bp => {
    // Test each breakpoint
    console.log(`Testing ${bp.name} at ${bp.width}px`);
  });
};
```

### Accessibility Testing
```javascript
// Test keyboard navigation at all breakpoints
const testKeyboardNavigation = () => {
  const breakpoints = [375, 768, 1024, 1440];
  
  breakpoints.forEach(width => {
    // Test tab order and focus management
    console.log(`Testing keyboard nav at ${width}px`);
  });
};
```

## Browser Support

### Supported Browsers
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: IE11 (with polyfills)

### Progressive Enhancement
```css
/* Base styles work everywhere */
.component {
  display: block;
}

/* Enhanced styles for modern browsers */
@supports (display: grid) {
  .component {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
```

## Implementation Checklist

### Before Implementation
- [ ] Define all breakpoints based on design requirements
- [ ] Create CSS custom properties for consistent spacing/typography
- [ ] Plan component hierarchies and responsive behaviors

### During Implementation
- [ ] Start with mobile-first styles
- [ ] Use appropriate measurement units (rem, em, vw, vh, clamp)
- [ ] Test at each breakpoint
- [ ] Optimize images for different screen sizes
- [ ] Consider touch targets for mobile

### After Implementation
- [ ] Test on real devices
- [ ] Validate with browser DevTools
- [ ] Check performance impact
- [ ] Verify accessibility at all breakpoints
- [ ] Test keyboard navigation

---

**Last Updated**: During folder structure migration  
**Version**: 1.0  
**Dependencies**: CSS Custom Properties, CSS Grid, Flexbox