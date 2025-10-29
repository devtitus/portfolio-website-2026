# Components Documentation

Welcome to the components documentation directory. This area contains comprehensive guides and references for all UI components used in the portfolio project.

## 📚 Quick Navigation

### Component Index
- **[index.md](./index.md)** - Master component documentation index and guidelines

### By Category
- **[Layout Components](./layouts/)** - Navigation, footer, and command menu
- **[Feature Components](./features/)** - Hero, projects, skills, and testimonials
- **[UI Components](./ui/)** - Base shadcn/ui components
- **[Providers](./providers/)** - Context providers and state management

## 🎯 Component Categories

### Layout Components
```
layouts/
├── navbar.tsx         # Main navigation component
├── footer.tsx         # Site footer component
└── command-menu.tsx   # ⌘K keyboard navigation
```

### Feature Components
```
features/
├── hero/              # Hero section components
├── projects/          # Project showcase components
├── skills/            # Skills display components
└── testimonials/      # Testimonial components
```

### UI Components
```
ui/
├── button.tsx         # Button component
├── card.tsx           # Card component
├── input.tsx          # Input components
└── ...               # Other shadcn/ui components
```

## 🚀 Component Usage

### Import Examples
```typescript
// Layout components
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { CommandMenu } from "@/components/layouts/command-menu";

// Feature components
import { HeroSection } from "@/components/features/hero/heroSection";
import { SkillsSection } from "@/components/features/skills/skillsSection";
import { ProjectSection } from "@/components/features/projects/projectSection";

// UI components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
```

### Usage Examples
```tsx
// Layout usage
<Navbar />
<main>
  <HeroSection />
  <SkillsSection />
  <ProjectSection />
  <TestimonialSection />
</main>
<Footer />

// Component variants
<Button variant="primary">Primary Action</Button>
<Button variant="outline">Secondary Action</Button>
<Button size="sm">Small Button</Button>
<Button size="lg">Large Button</Button>
```

## 📖 Documentation Standards

Each component should include:
- **Purpose and usage** description
- **Props interface** with TypeScript definitions
- **Usage examples** with code snippets
- **Accessibility features** (ARIA labels, keyboard navigation)
- **Styling information** (CSS modules, Tailwind classes)
- **Performance notes** (memoization, optimization)

## 🎨 Styling Architecture

### CSS Modules
```typescript
import styles from "./Component.module.css";
<div className={styles.container}>
  <h1 className={styles.title}>Content</h1>
</div>
```

### Tailwind Integration
```tsx
<div className="flex items-center justify-between p-4 bg-background">
  <h1 className="text-2xl font-bold text-foreground">Title</h1>
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
    Action
  </button>
</div>
```

## ♿ Accessibility Features

### ARIA Support
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

## ⚡ Performance

### Code Splitting
Components are automatically code-split by Next.js for optimal performance.

### Memoization
```tsx
const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});
```

### Image Optimization
```tsx
import Image from "next/image";

<Image
  src="/component-image.jpg"
  alt="Component preview"
  width={400}
  height={300}
  priority={isAboveFold}
/>
```

## 🧪 Testing

Each component includes comprehensive tests:
```typescript
// Component.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Component from "./Component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component prop="value" />);
    expect(screen.getByText("Expected text")).toBeInTheDocument();
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

**Maintained by**: Development Team  
**Component Count**: 25+ reusable components  
**Testing Coverage**: Unit and integration tests for all components