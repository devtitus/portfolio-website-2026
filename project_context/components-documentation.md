# Components Documentation

## Component Architecture Overview

The portfolio website follows a modular component architecture with clear separation of concerns. Components are organized by functionality and reusability, using React functional components with TypeScript for type safety.

## Core Components

### 1. MainPage (`app/page.tsx`)
**Purpose**: Main application router and state manager
**Type**: Client Component
**Key Features**:
- Single Page Application (SPA) routing
- URL synchronization with internal state
- Page rendering logic
- Navigation state management

**Props**: None (Root component)
**State**:
- `currentPage`: string - Active page identifier
- Router integration with Next.js navigation

**Usage**:
```tsx
<MainPage />
```

### 2. Navbar (`app/components/navbar/navbar.tsx`)
**Purpose**: Primary navigation component
**Type**: Client Component
**Key Features**:
- Responsive navigation menu
- Active page highlighting
- Command menu trigger
- Logo and branding
- Accessibility support (ARIA labels)

**Props**:
```tsx
interface NavbarProps {
  setCurrentPage: (page: string) => void;
}
```

**State**:
- `isCommandMenuOpen`: boolean - Command menu visibility

**Navigation Items**:
- Home (`/`)
- About (`/about`)
- Projects (`/projects`)
- Blog (disabled)
- Contact (`/contact`)

**Usage**:
```tsx
<Navbar setCurrentPage={setCurrentPage} />
```

### 3. CommandMenu (`app/components/command-menu/command-menu.tsx`)
**Purpose**: Keyboard-driven navigation interface
**Type**: Client Component
**Key Features**:
- Command palette interface (⌘K)
- Search functionality
- Keyboard shortcuts
- Click outside to close
- Grouped command categories

**Props**:
```tsx
interface CommandMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onNavigate: (page: string) => void;
}
```

**State**:
- `search`: string - Search query

**Command Categories**:
- **Pages**: Home, About, Projects, Contact
- **Actions**: Copy Email, Contact
- **Socials**: LinkedIn, X (Twitter), GitHub

**Keyboard Shortcuts**:
- `⌘K` / `Ctrl+K`: Open command menu
- `Esc`: Close command menu
- `↑/↓`: Navigate commands
- `Enter`: Select command

**Usage**:
```tsx
<CommandMenu 
  isOpen={isCommandMenuOpen}
  setIsOpen={setIsCommandMenuOpen}
  onNavigate={handleCommandNavigation}
/>
```

## Page Components

### 1. Home (`app/pages/home/home.tsx`)
**Purpose**: Landing page with hero section
**Type**: Client Component
**Composition**:
- HeroSection
- FobSection (Footer/Bottom section)

**Usage**:
```tsx
<Home />
```

### 2. HeroSection (`app/pages/home/components/heroSection.tsx`)
**Purpose**: Main hero section with call-to-action
**Type**: Client Component
**Key Features**:
- Animated aurora text effect
- Email copy functionality
- Call-to-action buttons
- Background aurora effects
- Responsive design

**State**:
- `isCopied`: boolean - Email copy status

**Interactive Elements**:
- "Let's Connect" button
- Email copy button with clipboard API
- Animated welcome icon

**Usage**:
```tsx
<HeroSection />
```

### 3. About (`app/pages/about/about.tsx`)
**Purpose**: About page component
**Type**: Client Component
**Status**: In development

### 4. Projects (`app/pages/projects/projects.tsx`)
**Purpose**: Portfolio showcase
**Type**: Client Component
**Status**: In development

### 5. Contact (`app/pages/contact/contact.tsx`)
**Purpose**: Contact information and form
**Type**: Client Component
**Status**: In development

## UI Components

### 1. AuroraText (`components/magicui/aurora-text.tsx`)
**Purpose**: Animated gradient text effect
**Type**: Custom Component
**Key Features**:
- Gradient color animation
- Configurable colors and speed
- CSS-based animations
- Responsive text rendering

**Props**:
```tsx
interface AuroraTextProps {
  colors: string[];
  speed: number;
  className?: string;
  children: React.ReactNode;
}
```

**Usage**:
```tsx
<AuroraText
  colors={["#F6B2E1", "#F3F4F6", "#F6B2E1", "#F6B2E1"]}
  speed={1.5}
  className={styles.auraText}
>
  Digital Experiences
</AuroraText>
```

## Utility Components

### 1. Icons (`app/utils/icons.tsx`)
**Purpose**: Centralized icon components
**Type**: SVG Icon Components
**Icons Available**:
- CopyIcon
- SearchIcon
- HomeIcon
- AboutIcon
- ProjectsIcon
- ContactIcon
- LinkedInIcon
- XIcon
- GithubIcon
- LinkIcon

**Usage**:
```tsx
import { CopyIcon } from "@/app/utils/icons";
<CopyIcon className={styles.copyIcon} />
```

### 2. Utils (`lib/utils.ts`)
**Purpose**: Utility functions
**Key Function**:
- `cn()`: Class name utility combining clsx and tailwind-merge

**Usage**:
```tsx
import { cn } from "@/lib/utils";
<div className={cn("base-class", conditionalClass, "additional-class")} />
```

## Styling Architecture

### CSS Modules
Each component has its own CSS module for scoped styling:
- `navbar.module.css`
- `commandMenu.module.css`
- `hero.module.css`

### Global Styles (`app/styles/globals.css`)
- CSS custom properties (variables)
- Font face definitions
- Base styles and resets
- Scrollbar customization
- Dark theme variables

### Tailwind CSS
- Utility-first approach
- Custom design system integration
- Responsive design utilities
- Animation utilities

## Component Patterns

### 1. Props Interface Pattern
```tsx
interface ComponentProps {
  // Define all props with types
}

const Component: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component implementation
};
```

### 2. State Management Pattern
```tsx
const [state, setState] = useState<Type>(initialValue);
```

### 3. Event Handler Pattern
```tsx
const handleEvent = (param: Type) => (e: React.MouseEvent) => {
  e.preventDefault();
  // Handler logic
};
```

### 4. Effect Pattern
```tsx
useEffect(() => {
  // Effect logic
  return () => {
    // Cleanup logic
  };
}, [dependencies]);
```

## Accessibility Features

### ARIA Support
- `aria-label` for buttons and interactive elements
- `aria-current="page"` for active navigation items
- `aria-disabled` for disabled elements
- `aria-label="Main navigation"` for nav elements

### Keyboard Navigation
- Tab order management
- Keyboard shortcuts (⌘K for command menu)
- Focus management
- Escape key handling

### Semantic HTML
- Proper heading hierarchy
- Semantic navigation elements
- Button elements for interactive actions
- Link elements for navigation

## Performance Considerations

### Code Splitting
- Automatic code splitting with Next.js
- Dynamic imports for heavy components
- Lazy loading for non-critical components

### Image Optimization
- Next.js Image component usage
- Optimized image formats (WebP, AVIF)
- Responsive image sizing
- Lazy loading for images

### Bundle Optimization
- Tree shaking for unused code
- Minimal bundle size
- Efficient re-renders with React.memo where needed

## Development Guidelines

### Component Creation
1. Create TypeScript interface for props
2. Use functional components with hooks
3. Implement proper error boundaries
4. Add accessibility attributes
5. Write CSS modules for styling
6. Export as default

### Naming Conventions
- Components: PascalCase (`HeroSection`)
- Files: camelCase (`heroSection.tsx`)
- CSS Modules: camelCase (`hero.module.css`)
- Props: camelCase (`isCommandMenuOpen`)

### File Organization
```
component-name/
├── component-name.tsx
├── component-name.module.css
└── index.ts (if needed)
```