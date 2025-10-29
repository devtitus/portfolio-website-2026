# Development Documentation

Welcome to the development documentation for the portfolio project. This directory contains comprehensive guides and resources for developers working on the project.

## 📋 Quick Navigation

### Essential Reading
- **[project-overview.md](./project-overview.md)** - Start here for project architecture
- **[coding-standards.md](./coding-standards.md)** - Code style and best practices
- **[tech-stack.md](./tech-stack.md)** - Technology decisions and rationale

### Setup & Getting Started
- **[INDEX.md](./INDEX.md)** - Master index of all development documentation
- **[setup-checklist.md](./setup-checklist.md)** - Development environment setup
- **[references-resources.md](./references-resources.md)** - External resources and links

### Content Management
- **[sanity-setup.md](./sanity-setup.md)** - Sanity CMS configuration
- **[sanity-migration-complete.md](./sanity-migration-complete.md)** - Migration guide
- **[prismic-to-sanity-migration.md](./prismic-to-sanity-migration.md)** - Legacy migration notes

### Architecture & Patterns
- **[components-documentation.md](./components-documentation.md)** - Component architecture
- **[responsiveness-calc-pattern.md](./responsiveness-calc-pattern.md)** - Responsive design patterns

## 🏗️ Project Structure

The project follows modern Next.js best practices with a clean, organized structure:

```
my_portfolio_new/
├── app/                    # Next.js App Router
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── features/         # Feature components
│   ├── layouts/          # Layout components
│   └── providers/        # Context providers
├── lib/                  # Core utilities & configurations
│   ├── config/           # Configuration files
│   ├── constants/        # App constants
│   ├── hooks/            # Custom React hooks
│   ├── services/         # External integrations
│   ├── types/            # TypeScript definitions
│   ├── utils/            # Utility functions
│   └── validations/      # Validation schemas
├── styles/               # Centralized styling
└── docs/                 # Documentation
    ├── api/              # API documentation
    ├── components/       # Component docs
    ├── deployment/       # Deployment guides
    ├── development/      # This directory
    └── user-guides/      # User documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ (LTS recommended)
- pnpm 10.14.0+
- Git
- WSL2 (for Windows development)

### Installation
```bash
# Clone and setup
git clone <repository-url>
cd my_portfolio_new
pnpm install

# Start development
pnpm dev
```

### Development Commands
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm type-check   # TypeScript validation
```

## 🛠️ Development Guidelines

### Code Standards
- Use TypeScript for all new code
- Follow functional component patterns
- Implement proper TypeScript interfaces
- Use CSS Modules for component styling
- Follow accessibility best practices

### Component Architecture
- Create reusable, composable components
- Use clear prop interfaces
- Implement proper error handling
- Add accessibility attributes
- Write comprehensive tests

### File Organization
- Place components in appropriate directories
- Use consistent naming conventions
- Group related functionality together
- Keep components focused and single-purpose

### Styling Approach
- Use Tailwind CSS for utility classes
- Use CSS Modules for component-specific styles
- Implement responsive design patterns
- Follow design system guidelines

## 📚 Documentation Standards

### Writing Guidelines
- Use clear, descriptive headings
- Include code examples for complex concepts
- Provide context and rationale for decisions
- Keep documentation up-to-date with code changes

### File Naming
- Use descriptive, kebab-case filenames
- Include file extensions in references
- Group related documentation together
- Use consistent terminology

### Cross-References
- Link to related documentation
- Provide both internal and external references
- Update links when moving files
- Test all documentation links

## 🔧 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear build cache
rm -rf .next
pnpm install
pnpm build
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
pnpm tsc --noEmit

# Update type definitions
pnpm update
```

#### Development Server Issues
```bash
# Restart development server
pnpm dev

# Clear node modules
rm -rf node_modules
pnpm install
```

### Getting Help
1. Check the relevant documentation in this directory
2. Review the troubleshooting sections in specific guides
3. Check the main project README
4. Review error messages and console output

## 🤝 Contributing

### Process
1. **Setup**: Follow the setup checklist
2. **Standards**: Read coding standards
3. **Changes**: Make changes following established patterns
4. **Testing**: Ensure all tests pass
5. **Documentation**: Update relevant documentation
6. **Review**: Submit for code review

### Best Practices
- Write clear commit messages
- Test changes thoroughly
- Update documentation for significant changes
- Follow the established project structure
- Use the existing naming conventions

## 📈 Performance

### Development
- Use Turbopack for faster builds (`pnpm dev --turbopack`)
- Enable Fast Refresh for quicker iteration
- Use React DevTools for debugging

### Production
- Monitor bundle size with `pnpm build`
- Use Lighthouse for performance auditing
- Implement code splitting where appropriate
- Optimize images and fonts

## 🔒 Security

### Development
- Never commit sensitive data
- Use environment variables for configuration
- Follow secure coding practices
- Keep dependencies updated

### Best Practices
- Input validation and sanitization
- Secure authentication patterns
- HTTPS enforcement
- Regular security audits

---

## 📞 Support

### Documentation Issues
- Check the [INDEX.md](./INDEX.md) for comprehensive navigation
- Review the [references-resources.md](./references-resources.md) for external help
- Use the search functionality in your IDE

### Technical Issues
- Review error messages and console output
- Check the troubleshooting sections in relevant guides
- Search existing documentation for similar issues

### Getting Help
- Review project documentation first
- Check external resources in references
- Use the project issue tracker for bugs
- Discuss implementation details with team members

---

**Maintained by**: Development Team  
**Last Updated**: During folder structure migration  
**Version**: 1.0 (Post-Migration)