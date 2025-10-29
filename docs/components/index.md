# Component Documentation

This directory contains comprehensive documentation for all UI components used in the portfolio project. Components are organized by functionality and reusability.

## 📁 Component Structure

### Directory Organization
```
docs/components/
├── index.md                    # Component documentation overview
├── ui/                        # Base UI components
│   ├── button.md              # Button component documentation
│   ├── input.md               # Input components
│   └── ...
├── features/                  # Feature-specific components
│   ├── hero/                  # Hero section components
│   ├── projects/              # Project showcase components
│   ├── skills/                # Skills display components
│   └── testimonials/          # Testimonial components
├── layouts/                   # Layout components
│   ├── navbar.md              # Navigation documentation
│   ├── footer.md              # Footer documentation
│   └── command-menu.md        # Command menu documentation
└── providers/                 # Context providers
```

## 🎯 Component Categories

### Base UI Components (`components/ui/`)
These are the fundamental building blocks based on shadcn/ui:
- **Button**: Interactive button component
- **Input**: Form input components
- **Card**: Content container component
- **Dialog**: Modal dialog component
- **Avatar**: User avatar component

### Feature Components (`components/features/`)
Domain-specific components organized by feature:
- **Hero Components**: Landing page hero section elements
- **Project Components**: Portfolio project showcase elements
- **Skills Components**: Technical skills display elements
- **Testimonials Components**: Customer testimonial elements

### Layout Components (`components/layouts/`)
Components that define the overall page structure:
- **Navbar**: Main navigation component
- **Footer**: Site footer component
- **Command Menu**: Keyboard navigation interface

### Provider Components (`components/providers/`)
Context providers for state management:
- **Theme Provider**: Theme and styling context
- **Data Provider**: Application data context

## 📖 Component Guidelines

### Component Standards
- **TypeScript**: All components use TypeScript interfaces
- **React Functional Components**: Modern functional component patterns
- **Proper Props Interfaces**: Clear, documented prop definitions
- **Accessibility**: ARIA labels and semantic HTML
- **Responsive Design**: Mobile-first responsive patterns
- **Performance**: Optimized rendering and re-renders

### Documentation Standards
Each component should have:
- **Clear description** of purpose and usage
- **Props interface** with type definitions
- **Usage examples** with code snippets
- **Accessibility notes** for screen readers and keyboard navigation
- **Styling information** for CSS modules and Tailwind classes
- **Performance considerations** for optimization

## 🔍 Quick Reference

### Core Layout Components
- **[Navbar](layouts/navbar.md)** - Main site navigation
- **[Footer](layouts/footer.md)** - Site footer with social links
- **[Command Menu](layouts/command-menu.md)** - ⌘K keyboard navigation

### Feature Components
- **[Hero Section](../development/components-documentation.md#hero-section)** - Landing page hero
- **[Skills Display](features/skills/skills-section.md)** - Technical skills showcase
- **[Project Cards](features/projects/project-cards.md)** - Portfolio project previews
- **[Testimonials](../development/components-documentation.md#testimonials)** - Customer testimonials

### UI Components
- **[Button](ui/button.md)** - Interactive button component
- **[Cards](ui/card.md)** - Content container component

## 🚀 Getting Started

### Using Components
```typescript
// Import components
import { Navbar } from "@/components/layouts/navbar";
import { HeroSection } from "@/components/features/hero/heroSection";
import { Button } from "@/components/ui/button";

// Use in your application
<Navbar />
<HeroSection />
<Button variant="primary">Click me</Button>
```

### Component Development
1. **Create TypeScript interface** for props
2. **Use functional components** with hooks
3. **Add accessibility attributes** (ARIA labels, semantic HTML)
4. **Write CSS modules** for component-specific styles
5. **Document usage** with examples and props interface

### Styling Approach
- **CSS Modules**: Component-scoped styling
- **Tailwind CSS**: Utility classes for common styles
- **Design System**: Consistent with overall design tokens
- **Responsive**: Mobile-first responsive design

## 📚 Component Library Integration

### shadcn/ui Components
This project uses shadcn/ui as the foundation for UI components:
- **Radix UI Primitives**: Accessible, unstyled components
- **Tailwind CSS**: Utility-first styling
- **TypeScript**: Full type safety
- **Customizable**: Easy theming and variants

### Component Variants
Most components support variants for different use cases:
```typescript
// Button variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Size variants
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

## 🎨 Styling Architecture

### CSS Modules
Each component has its own CSS module for scoped styling:
```typescript
// Component usage
import styles from "./Component.module.css";
<div className={styles.container}>
  <h1 className={styles.title}>Content</h1>
</div>
```

### Tailwind Integration
Utility classes for common styling patterns:
```typescript
<div className="flex items-center justify-between p-4 bg-background">
  <h1 className="text-2xl font-bold text-foreground">Title</h1>
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
    Action
  </button>
</div>
```

### Design System
Consistent use of design tokens:
```css
/* CSS Custom Properties */
:root {
  --color-primary: hsl(222.2 84% 4.9%);
  --color-secondary: hsl(210 40% 96%);
  --spacing-md: 1rem;
  --border-radius: 0.5rem;
}
```

## ♿ Accessibility Guidelines

### ARIA Support
All interactive components include proper ARIA attributes:
```tsx
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <CloseIcon aria-hidden="true" />
</button>
```

### Keyboard Navigation
Full keyboard accessibility with proper focus management:
```tsx
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "Escape") {
    onClose();
  }
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onClick();
  }
};
```

### Screen Reader Support
Semantic HTML structure and proper labeling:
```tsx
<nav aria-label="Main navigation">
  <ul role="list">
    <li>
      <a href="/" aria-current={isActive ? "page" : undefined}>
        Home
      </a>
    </li>
  </ul>
</nav>
```

## ⚡ Performance Considerations

### Code Splitting
Components are automatically code-split by Next.js:
```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
});
```

### Memoization
React.memo for expensive components:
```typescript
const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});
```

### Image Optimization
Next.js Image component for all images:
```tsx
import Image from "next/image";

<Image
  src="/component-image.jpg"
  alt="Component preview"
  width={400}
  height={300}
  priority={isAboveFold}
  placeholder="blur"
/>
```

## 🧪 Testing Components

### Component Testing
Each component should have comprehensive tests:
```typescript
// Component.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Component from "./Component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component prop="value" />);
    expect(screen.getByText("Expected text")).toBeInTheDocument();
  });

  it("handles user interaction", () => {
    const mockHandler = jest.fn();
    render(<Component onAction={mockHandler} />);
    
    fireEvent.click(screen.getByRole("button"));
    expect(mockHandler).toHaveBeenCalled();
  });
});
```

## 🔗 Related Documentation

### Development Guides
- **[Component Architecture](../development/components-documentation.md)** - Overall component patterns
- **[Coding Standards](../development/coding-standards.md)** - Code style and best practices
- **[Responsive Patterns](../development/responsiveness-calc-pattern.md)** - Responsive design patterns

### API Integration
- **[Sanity CMS Integration](../api/integration-documentation.md#sanity-cms-integration)** - Content management
- **[Service Layer](../development/project-overview.md#service-layer)** - Data fetching patterns

---

**Last Updated**: During folder structure migration  
**Component Count**: 25+ reusable components  
**Testing Coverage**: Unit and integration tests for all components