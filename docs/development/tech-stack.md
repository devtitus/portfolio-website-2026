# Tech Stack & Libraries

## Core Framework & Runtime
- **Next.js 15.4.6** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **React DOM 19.1.0** - React rendering for web
- **TypeScript 5** - Type-safe JavaScript development
- **Node.js** - JavaScript runtime environment

## Package Manager
- **pnpm 10.14.0** - Fast, disk space efficient package manager
- **pnpm-workspace.yaml** - Workspace configuration for monorepo support

## Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **tailwindcss-animate 1.0.7** - Animation utilities for Tailwind
- **CSS Modules** - Scoped CSS styling approach
- **Custom CSS Variables** - Design system with CSS custom properties

## UI Components & Libraries
- **shadcn/ui** - Re-usable components built with Radix UI and Tailwind CSS
  - **class-variance-authority 0.7.1** - Component variant management
  - **clsx 2.1.1** - Utility for constructing className strings
  - **tailwind-merge 3.3.1** - Merge Tailwind CSS classes without conflicts
- **cmdk 1.1.1** - Command menu component for keyboard navigation
- **lucide-react 0.539.0** - Beautiful & consistent icon toolkit

## Fonts & Typography
- **Geist** - Primary font family (Sans & Mono variants)
- **Excon** - Custom variable font (100-900 weight range)
- **Satoshi** - Secondary font family (300-900 weight range)
- **next/font** - Optimized font loading with Next.js

## Development Tools
- **ESLint 9** - Code linting and quality assurance
- **@eslint/eslintrc 3** - ESLint configuration utilities
- **eslint-config-next 15.4.6** - Next.js specific ESLint rules
- **Autoprefixer 10.4.21** - CSS vendor prefix automation
- **PostCSS** - CSS transformation tool

## Type Definitions
- **@types/node 20** - Node.js type definitions
- **@types/react 19** - React type definitions
- **@types/react-dom 19** - React DOM type definitions

## Build & Development
- **Turbopack** - Next.js bundler for fast development
- **Hot Module Replacement (HMR)** - Fast development experience
- **TypeScript Compiler** - Type checking and compilation

## Project Structure Dependencies
- **App Router** - Next.js 13+ routing system
- **Server Components** - React Server Components support
- **Client Components** - Interactive React components
- **CSS-in-JS** - Component-scoped styling approach

## Performance & Optimization
- **Image Optimization** - Next.js Image component
- **Font Optimization** - next/font automatic optimization
- **Bundle Analysis** - Built-in Next.js bundle analyzer
- **Code Splitting** - Automatic code splitting with Next.js

## Browser Support
- **Modern Browsers** - ES2017+ support
- **Progressive Enhancement** - Graceful degradation for older browsers
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## Development Environment
- **WSL2** - Windows Subsystem for Linux development environment
- **Linux Kernel 6.6.87.2** - Development OS
- **Bash Shell** - Command line interface

## Key Features Enabled
- **Server-Side Rendering (SSR)** - SEO and performance optimization
- **Static Site Generation (SSG)** - Pre-rendered pages
- **Incremental Static Regeneration (ISR)** - Hybrid rendering
- **API Routes** - Backend functionality within Next.js
- **Middleware** - Request/response manipulation
- **Edge Runtime** - Edge computing capabilities

## Custom Implementations
- **Aurora Text Effect** - Custom animated text component
- **Command Menu** - Keyboard-driven navigation system
- **Glass Morphism** - Modern UI design patterns
- **Custom Animations** - CSS keyframe animations
- **Responsive Navigation** - Mobile-optimized navigation system

## CMS & Content Management
- **Sanity CMS** - Headless content management system
  - **sanity/client** - Sanity JavaScript client
  - **sanity/image** - Image handling utilities
  - **@sanity/visual-editing** - Visual editing capabilities

## Utility Libraries
- **clsx** - Conditional className utility
- **tailwind-merge** - Merge Tailwind classes without conflicts
- **class-variance-authority** - Component variant management

## Migration Notes

### Recent Folder Structure Changes
The following changes have been made to improve organization:

#### Before Migration
- **Utilities**: Scattered across `app/utils/`, `lib/`, `components/ui/`
- **Types**: Distributed across component files and `sanity/`
- **Documentation**: Split between `project_context/` and `project_docs/`

#### After Migration (Current)
- **Utilities**: Centralized in `lib/utils/`, `lib/services/`, `lib/config/`
- **Types**: Consolidated in `lib/types/` with specific modules
- **Documentation**: Unified in `docs/` with logical categorization

#### New Structure Organization
```
lib/
├── config/          # Configuration files
├── constants/       # Application constants
├── hooks/           # Custom React hooks
├── services/        # External service integrations
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── validations/     # Validation schemas

docs/
├── api/             # API and integration documentation
├── components/      # Component documentation
├── deployment/      # Deployment and build guides
├── development/     # Development guidelines and references
└── user-guides/     # User-facing documentation
```

## Technology Decisions

### Why Next.js App Router?
- **Better Performance**: Optimized bundle splitting and streaming
- **Improved DX**: Simpler file-based routing and layouts
- **Server Components**: Reduced client-side JavaScript
- **Built-in Optimizations**: Automatic image and font optimization

### Why TypeScript?
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced IntelliSense and refactoring
- **Self-Documenting Code**: Interfaces and types as documentation
- **Refactoring Safety**: Safe large-scale code changes

### Why Tailwind CSS?
- **Rapid Development**: Utility-first approach speeds up styling
- **Consistency**: Design system enforcement through utilities
- **Bundle Optimization**: Purged unused styles in production
- **Responsive Design**: Built-in responsive breakpoints

### Why pnpm?
- **Performance**: Faster installs and less disk space usage
- **Monorepo Support**: Built-in workspace management
- **Dependency Management**: Better resolution and linking
- **CI/CD Friendly**: Consistent installs across environments

## Future Technology Considerations

### Potential Additions
- **Analytics**: Google Analytics 4, Vercel Analytics
- **Error Tracking**: Sentry, LogRocket
- **Testing**: Vitest, React Testing Library expansion
- **Deployment**: Enhanced CI/CD pipeline with GitHub Actions
- **Performance**: Core Web Vitals monitoring
- **A11y**: Automated accessibility testing

### Framework Updates
- **React 19**: When stable, adopt new concurrent features
- **Next.js 16+**: Stay current with latest features
- **TypeScript 5+**: Adopt new language features as they stabilize

## Dependency Management

### Version Strategy
- **Stable Versions**: Use production-ready versions
- **Security Updates**: Regular dependency audits and updates
- **Breaking Changes**: Planned upgrades with migration guides
- **Performance**: Monitor bundle size impact of new dependencies

### Development Dependencies
- **Build Tools**: TypeScript, ESLint, PostCSS
- **Development**: Hot reload, source maps, debugging tools
- **Testing**: Testing frameworks and utilities

### Production Dependencies
- **Framework**: Next.js, React core
- **Styling**: Tailwind CSS, CSS modules
- **UI Components**: shadcn/ui components, Lucide icons
- **CMS**: Sanity client and utilities