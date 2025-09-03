# Project Context Documentation

This folder contains comprehensive documentation for the **my_portfolio_new** project, designed to serve as a steering guide for AI tools like Gemini Code Assist, Cline, Roo Code, and other CLI agents.

## 📚 Documentation Structure

### Core Documentation
- **[Tech Stack & Libraries](./tech-stack.md)** - Complete technology stack, dependencies, and tools used
- **[Project Overview](./project-overview.md)** - Project description, purpose, architecture, and business goals
- **[Components Documentation](./components-documentation.md)** - Detailed component architecture and usage
- **[Coding Standards](./coding-standards.md)** - Code style guide, patterns, and best practices
- **[Integration & API Documentation](./integration-documentation.md)** - External integrations and API architecture
- **[Deployment & Build](./deployment-build.md)** - Build process, deployment options, and CI/CD
- **[References & Resources](./references-resources.md)** - External documentation, tools, and learning resources

## 🎯 Purpose

This documentation serves multiple purposes:

### For AI Development Tools
- **Context Understanding**: Provides comprehensive project context for AI assistants
- **Code Generation**: Enables accurate code suggestions and implementations
- **Architecture Guidance**: Helps maintain consistent patterns and standards
- **Best Practices**: Ensures adherence to established coding standards

### For Developers
- **Onboarding**: Quick understanding of project structure and conventions
- **Maintenance**: Clear guidelines for updates and modifications
- **Collaboration**: Shared understanding of project architecture
- **Quality Assurance**: Standards for code quality and consistency

### For Project Management
- **Technical Overview**: High-level understanding of technology choices
- **Deployment Process**: Clear deployment and build procedures
- **Resource Planning**: Understanding of tools and dependencies needed

## 🏗️ Project Architecture Summary

### Technology Stack
- **Framework**: Next.js 15.4.6 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + CSS Modules
- **Package Manager**: pnpm 10.14.0
- **UI Components**: shadcn/ui + custom components

### Key Features
- **Single Page Application**: Client-side routing with URL synchronization
- **Command Menu**: Keyboard-driven navigation (⌘K)
- **Glass Morphism Design**: Modern UI with translucent effects
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Image optimization, font optimization, code splitting

### Component Structure
```
app/
├── layout.tsx (Root Layout)
├── page.tsx (Main Router)
├── components/ (Reusable Components)
├── pages/ (Page Components)
├── styles/ (CSS Modules)
└── utils/ (Utilities & Icons)
```

## 🚀 Quick Start

### Development Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

### Key Commands
- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Create production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📋 Documentation Usage

### For AI Tools
When working with AI development tools, reference these documents to:
1. **Understand Context**: Read project overview and tech stack
2. **Follow Standards**: Apply coding standards and patterns
3. **Maintain Architecture**: Use component documentation for consistency
4. **Handle Integrations**: Follow integration patterns for new features

### For Manual Development
1. **Start Here**: Read project overview for high-level understanding
2. **Setup**: Follow deployment documentation for environment setup
3. **Development**: Use coding standards and component documentation
4. **Reference**: Use references document for external resources

## 🔄 Maintenance

### Updating Documentation
- Update relevant sections when making architectural changes
- Keep tech stack current with dependency updates
- Maintain coding standards as project evolves
- Update deployment procedures for new environments

### Version Control
- Documentation should be versioned with code changes
- Major architectural changes require documentation updates
- Keep references and resources current

## 📞 Contact & Support

For questions about this documentation or the project:
- **Developer**: Melwyn Titus
- **Email**: m.works.gd@gmail.com
- **Project**: Portfolio Website

## 📝 License

This documentation is part of the my_portfolio_new project and follows the same licensing terms.

---

*Last Updated: December 2024*
*Documentation Version: 1.0*