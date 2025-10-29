# Next.js Folder Structure Migration Task List

## Pre-Migration Preparation

### Phase 0: Setup & Backup
- [x] **Create migration branch**: `git checkout -b folder-structure-migration`
- [x] **Full backup**: Create complete project backup
- [x] **Document all current imports**: Run analysis to catalog all import statements
- [x] **Install migration tools**: `npm install -D @typescript-eslint/parser eslint-plugin-import`
- [x] **Create migration scripts**: Prepare automated import update scripts
- [x] **Freeze feature development**: No new features during migration

## Phase 1: Foundation Setup (1-2 days)

### 1.1 Create New Directory Structure
- [x] **Create route groups**: `mkdir -p app/\(routes\)/\{about,contact,projects,\(home\)\}`
- [x] **Create component directories**:
  - `mkdir -p components/\{ui,features,layouts,providers\}`
  - `mkdir -p components/features/\{hero,projects,skills,testimonials\}`
- [x] **Create lib structure**: `mkdir -p lib/\{config,constants,hooks,services,types,utils,validations\}`
- [x] **Create styles structure**: `mkdir -p styles/\{components,themes,utilities\}`
- [x] **Create docs structure**: `mkdir -p docs/\{api,components,deployment,development,user-guides\}`

### 1.2 Initialize New Directories
- [x] **Add README files** to all new directories with purpose and guidelines
- [x] **Create index.ts files** for clean imports in component directories
- [x] **Set up TypeScript paths** in tsconfig.json for new structure
- [ ] **Update .gitignore** if needed for new structure

### 1.3 Move Core App Files
- [x] **Move root layout**: `app/layout.tsx` → `app/layout.tsx` (keep in place)
- [x] **Move global styles**: `app/styles/globals.css` → `styles/globals.css`
- [x] **Move page.tsx**: `app/page.tsx` → `app/(home)/page.tsx`
- [ ] **Update root layout imports** to reflect new structure

## Phase 2: Route Migration (2-3 days)

### 2.1 Migrate Page Components
- [x] **About page**: `app/pages/about/about.tsx` → `app/(routes)/about/page.tsx`
- [x] **Contact page**: `app/pages/contact/contact.tsx` → `app/(routes)/contact/page.tsx`
- [x] **Projects page**: `app/pages/projects/projects.tsx` → `app/(routes)/projects/page.tsx`
- [x] **Home page**: `app/pages/home/home.tsx` → `app/(home)/page.tsx` (already done)

### 2.2 Migrate Page-Specific Components
- [x] **Home components**: Move all from `app/pages/home/components/` → `app/(home)/components/`
- [x] **Update component imports** in migrated page files
- [x] **Test page routing** after each migration

### 2.3 Update Route-Based Imports
- [x] **Update all imports** pointing to old page locations
- [x] **Run build test** after each page migration
- [x] **Verify navigation** between all routes

## Phase 3: Component Consolidation (2-3 days)

### 3.1 Consolidate Shared Components
- [x] **Move UI components**: `components/ui/*` → `components/ui/*` (keep, already correct)
- [x] **Move MagicUI components**: `components/magicui/*` → `components/ui/magicui/` (optional)
- [x] **Move app components**: `app/components/*/*` → appropriate `components/` subdirectories

### 3.2 Feature-Based Organization
- [x] **Hero components**: Move to `components/features/hero/`
- [x] **Project components**: Move to `components/features/projects/`
- [x] **Skill components**: Move to `components/features/skills/`
- [x] **Testimonial components**: Move to `components/features/testimonials/`

### 3.3 Layout Components
- [x] **Header/Navbar**: Move to `components/layouts/`
- [x] **Footer**: Move to `components/layouts/`
- [x] **Navigation**: Move to `components/layouts/`

### 3.4 Update All Component Imports
- [x] **Batch update imports** using automated scripts
- [x] **Manual verification** of complex import chains
- [x] **Test component rendering** after each move

## Phase 4: Styling Consolidation (1-2 days)

### 4.1 Centralize CSS Modules
- [x] **Move component styles**: `app/styles/components/*` → `styles/components/`
- [x] **Move page styles**: `app/styles/home/*` → `styles/features/home/`
- [x] **Move layout styles**: `app/styles/navbar/*`, `app/styles/footer/*` → `styles/layouts/`

### 4.2 Update Style Imports
- [x] **Update all CSS imports** in component files
- [x] **Update CSS module references** in TypeScript files
- [x] **Verify CSS module loading** after each move

### 4.3 Clean Up Duplicate Styles
- [x] **Remove duplicate styles** from old locations
- [x] **Consolidate conflicting styles** with proper precedence
- [x] **Test visual consistency** across all pages

## Phase 5: Utility & Configuration Migration (1 day)

### 5.1 Consolidate Utilities
- [x] **Move app utils**: `app/utils/*` → `lib/utils/`
- [x] **Move lib files**: `lib/*` → `lib/` (organize properly)
- [x] **Move queries**: `app/queries/*` → `lib/services/`

### 5.2 Type Definitions
- [x] **Create global types**: Move to `lib/types/`
- [x] **Update type imports** across codebase
- [x] **Verify TypeScript compilation**

### 5.3 Configuration Files
- [x] **Move config files** to appropriate `lib/config/` locations
- [x] **Update configuration imports**
- [x] **Test configuration loading**

## Phase 6: Documentation Consolidation (1 day)

### 6.1 Merge Documentation
- [ ] **Move project_context**: `project_context/*` → `docs/development/`
- [ ] **Move project_docs**: `project_docs/*` → `docs/` (organized by type)
- [ ] **Update documentation links** in README and other files

### 6.2 Documentation Organization
- [ ] **API docs**: Move to `docs/api/`
- [ ] **Component docs**: Move to `docs/components/`
- [ ] **Deployment docs**: Move to `docs/deployment/`
- [ ] **Development docs**: Move to `docs/development/`

## Phase 7: Import Path Updates & Testing (2-3 days)

### 7.1 Automated Import Updates
- [ ] **Run import update scripts** for bulk changes
- [ ] **Update relative imports** to absolute paths
- [ ] **Fix TypeScript path mappings**

### 7.2 Manual Import Fixes
- [ ] **Review complex imports** that scripts couldn't handle
- [ ] **Update dynamic imports** and lazy loading
- [ ] **Fix CSS module imports**

### 7.3 Comprehensive Testing
- [ ] **Build test**: `npm run build` passes
- [ ] **Type check**: `npm run type-check` passes
- [ ] **Lint check**: `npm run lint` passes
- [ ] **Unit tests**: All tests pass
- [ ] **E2E tests**: Critical user flows work

### 7.4 Functional Testing
- [ ] **Page navigation**: All routes work
- [ ] **Component interaction**: All interactive elements work
- [ ] **Styling**: Visual consistency maintained
- [ ] **Performance**: No degradation in load times

## Phase 8: Cleanup & Optimization (1 day)

### 8.1 Remove Old Files
- [ ] **Delete empty directories** from old structure
- [ ] **Remove duplicate files** safely
- [ ] **Clean up temporary files**

### 8.2 Update Configuration
- [ ] **Update package.json scripts** if needed
- [ ] **Update build configurations**
- [ ] **Update deployment scripts**

### 8.3 Documentation Updates
- [ ] **Update README** with new structure
- [ ] **Update contribution guidelines**
- [ ] **Create migration guide** for future reference

## Risk Mitigation Tasks

### Throughout Migration
- [ ] **Daily backups**: Commit working state each day
- [ ] **Feature flags**: Use for risky changes
- [ ] **Rollback plan**: Document steps to revert changes
- [ ] **Communication**: Update team on progress

### Testing Checkpoints
- [ ] **After each phase**: Full build and basic functionality test
- [ ] **After each component move**: Component-specific testing
- [ ] **After import updates**: Type checking and compilation
- [ ] **Final verification**: Complete user flow testing

## Success Criteria

### Functional Requirements
- [ ] All pages load without errors
- [ ] All components render correctly
- [ ] All interactive features work
- [ ] All styles load properly
- [ ] Build process completes successfully

### Quality Requirements
- [ ] No TypeScript errors
- [ ] No ESLint warnings/errors
- [ ] All tests pass
- [ ] Performance maintained or improved
- [ ] Bundle size not significantly increased

### Developer Experience
- [ ] Clear file organization
- [ ] Consistent import patterns
- [ ] Easy to find and modify code
- [ ] Proper TypeScript support

## Rollback Procedures

### Emergency Rollback
1. `git reset --hard HEAD~{n}` to revert commits
2. `git checkout {backup-branch}` if needed
3. Restore from backup if necessary

### Partial Rollback
1. Identify failing component/area
2. Revert specific file changes
3. Test isolated functionality
4. Continue migration for other areas

## Timeline & Milestones

- **Phase 0**: Day 1 (Setup)
- **Phase 1**: Days 2-3 (Foundation)
- **Phase 2**: Days 4-6 (Routes)
- **Phase 3**: Days 7-9 (Components)
- **Phase 4**: Days 10-11 (Styling)
- **Phase 5**: Day 12 (Utilities)
- **Phase 6**: Day 13 (Documentation)
- **Phase 7**: Days 14-16 (Testing)
- **Phase 8**: Day 17 (Cleanup)

**Total: ~17 days with comprehensive testing**

## Communication Plan

- **Daily standups**: Progress updates and blockers
- **Weekly demos**: Show migrated sections
- **Documentation**: Keep migration guide updated
- **Team training**: Sessions on new structure