# Development Documentation Index

## Overview

This directory contains comprehensive documentation for developers working on the portfolio project. All documentation has been consolidated and organized following the new folder structure migration.

## 📚 Documentation Structure

### Core Development
- **[tech-stack.md](./tech-stack.md)** - Complete technology stack overview and decisions
- **[coding-standards.md](./coding-standards.md)** - Code style guide and best practices
- **[references-resources.md](./references-resources.md)** - Links to external resources and documentation

### Project Information
- **[project-overview.md](./project-overview.md)** - High-level project overview and architecture
- **[README.md](./README.md)** - Project overview and quick start guide

### Content Management
- **[sanity-migration-complete.md](./sanity-migration-complete.md)** - Sanity CMS setup and migration guide
- **[sanity-setup.md](./sanity-setup.md)** - Detailed Sanity configuration instructions
- **[prismic-to-sanity-migration.md](./prismic-to-sanity-migration.md)** - Migration documentation

### Development Patterns
- **[responsiveness-calc-pattern.md](./responsiveness-calc-pattern.md)** - Responsive design patterns
- **[setup-checklist.md](./setup-checklist.md)** - Development setup checklist

## 🔄 Recent Changes

### Folder Structure Migration
All documentation has been migrated from scattered locations to this unified structure:

#### Before
```
project_context/          # Mixed documentation
project_docs/            # Additional docs
```

#### After
```
docs/
├── api/                 # API and integration docs
├── components/          # Component documentation  
├── deployment/          # Build and deployment guides
├── development/         # Development guidelines
└── user-guides/         # User-facing documentation
```

## 🚀 Quick Start

### For New Developers
1. Start with **[project-overview.md](./project-overview.md)** to understand the architecture
2. Review **[coding-standards.md](./coding-standards.md)** for style guidelines
3. Follow **[setup-checklist.md](./setup-checklist.md)** for environment setup
4. Check **[tech-stack.md](./tech-stack.md)** for technology details

### For Contributors
1. Read **[coding-standards.md](./coding-standards.md)** before making changes
2. Use **[references-resources.md](./references-resources.md)** for external resources
3. Follow the folder structure outlined in **project-overview.md**

### For Maintainers
1. Refer to **[deployment-build.md](../deployment/deployment-build.md)** for deployment procedures
2. Use **[sanity-setup.md](./sanity-setup.md)** for CMS management
3. Check integration patterns in **[integration-documentation.md](../api/integration-documentation.md)**

## 📁 File Organization

### By Type
- **Architecture & Overview**: project-overview.md, README.md
- **Standards & Guidelines**: coding-standards.md, references-resources.md
- **Technology Details**: tech-stack.md, setup-checklist.md
- **Content Management**: sanity-*.md files
- **Patterns & Best Practices**: responsiveness-calc-pattern.md

### By Audience
- **Developers**: All files in this directory
- **Contributors**: coding-standards.md, setup-checklist.md
- **Maintainers**: sanity-*.md, deployment documentation
- **New Team Members**: project-overview.md, setup-checklist.md

## 🔗 Cross-References

### Related Documentation
- **[Component Documentation](../components/)** - Component-specific documentation
- **[API Documentation](../api/)** - Integration and API guides
- **[Deployment Documentation](../deployment/)** - Build and deployment guides

### External Resources
- **[references-resources.md](./references-resources.md)** - Curated list of external resources
- **[tech-stack.md](./tech-stack.md)** - Links to official documentation for all technologies used

## 🛠️ Development Workflow

### Documentation Updates
1. **Make Changes**: Update relevant documentation files
2. **Cross-Reference**: Check for links to other docs that may need updates
3. **Test Links**: Verify all internal links work correctly
4. **Version Control**: Commit changes with descriptive messages

### Adding New Documentation
1. **Choose Location**: Place in appropriate subdirectory (api/, components/, deployment/, development/, user-guides/)
2. **Follow Standards**: Use existing file naming and formatting conventions
3. **Update Index**: Add to relevant index files
4. **Cross-Link**: Reference related documentation where appropriate

## 🔄 Migration Notes

### File Movements
All documentation has been consolidated and organized. Key changes:

- **Consolidation**: Multiple doc locations → unified `docs/` structure
- **Organization**: Logical categorization by type and audience
- **Updates**: All path references updated to reflect new structure
- **Enhancement**: Added cross-references and improved navigation

### Legacy References
Old paths may still exist in external documentation or references:
- `project_context/` → `docs/development/`
- `project_docs/` → `docs/development/` (organized by type)

## 📞 Support

### Getting Help
1. Check relevant documentation in this directory
2. Review **[references-resources.md](./references-resources.md)** for external help
3. Use project-specific documentation in other `docs/` subdirectories
4. Check the main **[README.md](../../README.md)** for project overview

### Contributing
1. Follow the **[coding-standards.md](./coding-standards.md)** when updating docs
2. Ensure all links work and references are current
3. Update this index when adding new documentation
4. Use clear, descriptive file names and titles

---

**Last Updated**: During folder structure migration
**Maintained By**: Development Team
**Version**: 1.0 (Post-Migration)