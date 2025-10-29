# Coding Standards & Style Guide

## General Principles

### Code Quality
- **Type Safety**: Use TypeScript for all components and functions
- **Readability**: Write self-documenting code with clear variable names
- **Consistency**: Follow established patterns throughout the codebase
- **Performance**: Optimize for bundle size and runtime performance
- **Accessibility**: Ensure all components are accessible by default

### Development Philosophy
- **Component-First**: Build reusable, composable components
- **Mobile-First**: Design and develop for mobile devices first
- **Progressive Enhancement**: Ensure core functionality works without JavaScript
- **Performance-First**: Optimize for Core Web Vitals and user experience

## TypeScript Standards

### Type Definitions
```typescript
// Interface naming: PascalCase with descriptive names
interface ComponentProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavigate: (page: string) => void;
}

// Type aliases for complex types
type NavigationHandler = (page: string) => void;
type EventHandler<T = HTMLElement> = (e: React.MouseEvent<T>) => void;
```

### Component Typing
```typescript
// Functional components with explicit return type
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  return <div>{/* component JSX */}</div>;
};

// Event handlers with proper typing
const handleClick: EventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault();
  // handler logic
};
```

### State Management
```typescript
// Explicit state typing
const [isOpen, setIsOpen] = useState<boolean>(false);
const [search, setSearch] = useState<string>("");
const [items, setItems] = useState<Item[]>([]);

// Custom hook typing
const useCustomHook = (): { data: Data; loading: boolean } => {
  // hook implementation
};
```

## React Standards

### Component Structure
```typescript
// 1. Imports (external libraries first, then internal)
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./component.module.css";

// 2. Type definitions
interface ComponentProps {
  // prop definitions
}

// 3. Component definition
const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // 4. State declarations
  const [state, setState] = useState<Type>(initialValue);
  
  // 5. Effect hooks
  useEffect(() => {
    // effect logic
  }, [dependencies]);
  
  // 6. Event handlers
  const handleEvent = (param: Type) => (e: React.MouseEvent) => {
    e.preventDefault();
    // handler logic
  };
  
  // 7. Render logic
  return (
    <div className={styles.container}>
      {/* JSX content */}
    </div>
  );
};

// 8. Export
export default Component;
```

### Hooks Usage
```typescript
// useState with explicit typing
const [count, setCount] = useState<number>(0);

// useEffect with proper dependencies
useEffect(() => {
  // effect logic
  return () => {
    // cleanup logic
  };
}, [dependency1, dependency2]);

// Custom hooks for reusable logic
const useLocalStorage = <T>(key: string, initialValue: T) => {
  // custom hook implementation
};
```

### Event Handling
```typescript
// Inline handlers for simple actions
<button onClick={() => setCount(count + 1)}>Increment</button>

// Extracted handlers for complex logic
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // form submission logic
};

// Handler factories for dynamic handlers
const createClickHandler = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  // handler logic with id
};
```

## CSS & Styling Standards

### CSS Modules
```css
/* File: component.module.css */
.container {
  /* Use CSS custom properties */
  background: var(--glass-color);
  border-radius: var(--border-radius-12px);
  padding: var(--padding-16px);
}

/* BEM-like naming for complex selectors */
.container__header {
  margin-bottom: var(--padding-16px);
}

.container__header--active {
  color: var(--nav-text-active);
}
```

### Tailwind CSS Usage
```tsx
// Utility classes for common styles
<div className="flex items-center justify-between p-4 bg-background">
  <h1 className="text-2xl font-bold text-foreground">Title</h1>
  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
    Action
  </button>
</div>

// Combine with CSS modules for complex styles
<div className={`${styles.container} flex flex-col gap-4`}>
  {/* content */}
</div>
```

### CSS Custom Properties
```css
/* Define in globals.css */
:root {
  --glass-color: rgba(255, 255, 255, 0.06);
  --border-radius-12px: 12px;
  --padding-16px: 16px;
}

/* Use in components */
.component {
  background: var(--glass-color);
  border-radius: var(--border-radius-12px);
  padding: var(--padding-16px);
}
```

## File Organization

### Directory Structure
```
app/
├── (routes)/              # Route groups for organization
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── projects/         # Projects page
│   └── (home)/           # Home page
├── api/                  # API routes
└── layout.tsx            # Root layout

components/               # Shared components
├── ui/                  # Base UI components
├── features/            # Feature-specific components
├── layouts/             # Layout components
└── providers/           # Context providers

lib/                     # Core utilities & configurations
├── config/              # Configuration files
├── constants/           # App constants
├── hooks/               # Custom React hooks
├── services/            # External service integrations
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── validations/         # Validation schemas

styles/                  # Centralized styling
├── components/          # Component-specific styles
├── features/            # Feature-specific styles
├── layouts/             # Layout styles
└── utilities/           # Utility classes
```

### Naming Conventions
```
Files:
- Components: PascalCase (HeroSection.tsx)
- Pages: PascalCase (Home.tsx)
- Utilities: camelCase (icons.tsx)
- Styles: camelCase (hero.module.css)

Directories:
- Components: kebab-case (command-menu/)
- Pages: kebab-case (home/)
- Styles: kebab-case (components/)
```

## Import/Export Standards

### Import Order
```typescript
// 1. React and Next.js imports
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// 2. Third-party libraries
import { Command } from "cmdk";
import { clsx } from "clsx";

// 3. Internal components
import Navbar from "@/components/layouts/navbar";
import CommandMenu from "@/components/layouts/command-menu";

// 4. Styles and utilities
import styles from "./component.module.css";
import { cn } from "@/lib/utils";
```

### Export Patterns
```typescript
// Default export for main component
export default Component;

// Named exports for utilities
export { utilityFunction, constantValue };

// Re-export pattern for barrel exports
export { default as Component } from "./Component";
```

## Performance Standards

### Code Splitting
```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <div>Loading...</div>,
});

// Lazy loading for non-critical components
const LazyComponent = lazy(() => import("./LazyComponent"));
```

### Memoization
```typescript
// React.memo for expensive components
const ExpensiveComponent = React.memo<Props>(({ data }) => {
  return <div>{/* expensive rendering */}</div>;
});

// useMemo for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);

// useCallback for stable function references
const stableHandler = useCallback((id: string) => {
  // handler logic
}, [dependency]);
```

### Image Optimization
```tsx
// Next.js Image component for optimization
<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={400}
  height={300}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## Accessibility Standards

### ARIA Attributes
```tsx
// Proper ARIA labeling
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <CloseIcon aria-hidden="true" />
</button>

// Navigation landmarks
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

### Keyboard Navigation
```tsx
// Keyboard event handling
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === "Escape") {
    onClose();
  }
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onClick();
  }
};

// Focus management
useEffect(() => {
  if (isOpen) {
    const firstFocusable = containerRef.current?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  }
}, [isOpen]);
```

## Error Handling

### Error Boundaries
```typescript
// Error boundary component
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
```

### Async Error Handling
```typescript
// Proper error handling for async operations
const handleAsyncOperation = async () => {
  try {
    const result = await asyncFunction();
    setData(result);
  } catch (error) {
    console.error("Async operation failed:", error);
    setError("Operation failed. Please try again.");
  }
};
```

## Testing Standards

### Component Testing
```typescript
// Test file naming: Component.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Component from "./Component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component prop1="value" />);
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

## Documentation Standards

### Component Documentation
```typescript
/**
 * HeroSection component displays the main hero content with animated text
 * and call-to-action buttons.
 * 
 * @param props - Component props
 * @param props.title - Main hero title text
 * @param props.subtitle - Hero subtitle text
 * @param props.onAction - Callback for action button clicks
 * 
 * @example
 * <HeroSection 
 *   title="Welcome to My Portfolio"
 *   subtitle="Full Stack Developer"
 *   onAction={() => console.log('Action clicked')}
 * />
 */
const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, onAction }) => {
  // component implementation
};
```

### README Standards
- Clear project description
- Installation instructions
- Development setup
- Available scripts
- Deployment instructions
- Contributing guidelines