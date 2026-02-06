# 🚀 Melwyn Titus Portfolio

A modern, immersive portfolio website showcasing full-stack development expertise through cutting-edge web technologies, stunning animations, and seamless user experiences.

## 📖 Overview

This portfolio serves as a digital showcase for Melwyn Titus, a Full Stack Developer specializing in building exceptional digital experiences. The website features a sophisticated dark theme with glass morphism effects, interactive 3D elements, and a headless CMS for effortless content management.

**Live Site**: [melwyntitus.vercel.app](https://melwyntitus.vercel.app)

## ✨ Key Features

- 🎨 **Modern Dark Theme** - Professional dark color scheme with glass morphism effects
- ⌨️ **Command Menu** - Keyboard-driven navigation (⌘K) for power users
- 🌍 **3D Globe Visualization** - Interactive globe showcasing global reach
- ✨ **Aurora Text Effects** - Animated gradient text for visual impact
- 📱 **Fully Responsive** - Mobile-first design with fluid typography
- 🖱️ **Smooth Scrolling** - Lenis-powered smooth scroll experience
- 📝 **Sanity CMS** - Headless content management for easy updates
- 🎭 **Framer Motion** - Sophisticated page transitions and animations
- 🎯 **SEO Optimized** - Server-side rendering with structured data

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.4 | React framework with App Router |
| [React](https://react.dev/) | 19.2.0 | UI library with concurrent features |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe development |
| [Node.js](https://nodejs.org/) | 18+ | JavaScript runtime |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [shadcn/ui](https://ui.shadcn.com/) | Re-usable component library |
| [Framer Motion](https://www.framer.com/motion/) | Animation library |
| [Lenis](https://lenis.studiofreight.com/) | Smooth scroll |
| CSS Modules | Scoped component styling |

### 3D & Graphics
| Technology | Purpose |
|------------|---------|
| [Three.js](https://threejs.org/) | 3D graphics library |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer for Three.js |
| [React Three Drei](https://github.com/pmndrs/drei) | Useful helpers for R3F |

### CMS & Backend
| Technology | Purpose |
|------------|---------|
| [Sanity CMS](https://www.sanity.io/) | Headless content management |
| [next-sanity](https://github.com/sanity-io/next-sanity) | Sanity integration for Next.js |
| [Sanity Vision](https://www.sanity.io/docs/vision) | GROQ query tool |

### Development Tools
| Technology | Purpose |
|------------|---------|
| [pnpm](https://pnpm.io/) | Fast, disk space efficient package manager |
| [ESLint](https://eslint.org/) | Code linting and quality |
| [Turbopack](https://turbo.build/pack) | Next.js bundler for fast development |
| [TypeScript](https://www.typescriptlang.org/) | Static type checking |

## 📁 Project Structure

```
my-portfolio-new/
├── 📂 app/                          # Next.js App Router
│   ├── 📂 (routes)/                 # Route groups
│   │   ├── 📂 (home)/               # Home page
│   │   ├── 📂 about/                # About page
│   │   ├── 📂 contact/              # Contact page
│   │   └── 📂 projects/             # Projects page
│   ├── 📂 components/               # App-level components
│   │   └── structured-data.tsx      # SEO structured data
│   └── 📂 studio/                   # Embedded Sanity Studio
│       └── [[...tool]]/             # Studio route handler
│
├── 📂 components/                   # React components
│   ├── 📂 features/                 # Feature-specific components
│   │   ├── 📂 about/                # About page sections
│   │   ├── 📂 contact/              # Contact page sections
│   │   ├── 📂 home/                 # Home page sections
│   │   └── 📂 projects/             # Projects page sections
│   ├── 📂 layouts/                  # Layout components
│   │   ├── command-menu.tsx         # ⌘K command palette
│   │   ├── footer.tsx               # Site footer
│   │   └── navbar.tsx               # Navigation bar
│   ├── 📂 providers/                # Context providers
│   │   ├── contact-modal-provider.tsx
│   │   └── smooth-scroll.tsx        # Lenis provider
│   └── 📂 ui/                       # Reusable UI components
│       ├── 📂 buttons/              # Button variants
│       ├── 📂 cards/                # Card components
│       ├── 📂 magicui/              # Magic UI effects
│       └── 📂 sections/             # Section components
│
├── 📂 lib/                          # Utilities & configurations
│   ├── 📂 config/                   # Configuration files
│   ├── 📂 services/                 # External services
│   │   └── 📂 sanity/               # Sanity query functions
│   ├── 📂 types/                    # TypeScript types
│   │   └── sanity.ts                # Sanity type definitions
│   └── 📂 utils/                    # Utility functions
│       └── icons.tsx                # Icon components
│
├── 📂 sanity/                       # Sanity CMS configuration
│   ├── 📂 lib/                      # Sanity utilities
│   ├── 📂 schemas/                  # Content schemas
│   │   ├── ctaSettings.ts           # CTA settings
│   │   ├── education.ts             # Education entries
│   │   ├── experience.ts            # Work experience
│   │   ├── project.ts               # Project entries
│   │   ├── skill.ts                 # Skills
│   │   └── testimonial.ts           # Testimonials
│   ├── env.ts                       # Sanity environment variables
│   └── sanity.config.ts             # Sanity configuration
│
├── 📂 styles/                       # Global styles
│   ├── globals.css                  # Global CSS
│   └── 📂 components/               # Component styles
│
├── 📂 public/                       # Static assets
│   ├── 📂 font/                     # Custom fonts (Excon, Satoshi)
│   ├── 📂 home/                     # Home page images
│   ├── 📂 macbook/                  # MacBook frame images
│   └── favicon files                # Site favicons
│
├── 📂 docs/                         # Documentation
│   ├── 📂 api/                      # API documentation
│   ├── 📂 components/               # Component docs
│   ├── 📂 deployment/               # Deployment guides
│   └── 📂 development/              # Development guides
│
└── 📂 scripts/                      # Utility scripts
    └── convert-to-webp.js           # Image conversion script
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **pnpm** package manager (`npm install -g pnpm`)
- **Sanity account** (free at [sanity.io](https://sanity.io))

### Quick Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/devtitus/My_Final_Portfolio_Website.git
   cd my-portfolio-new
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Configure environment variables**
   ```bash
   copy .env.example .env.local
   ```
   
   Add your Sanity credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

4. **Initialize Sanity (if needed)**
   ```bash
   npx sanity init --env
   npx sanity deploy
   ```

5. **Configure CORS in Sanity Dashboard**
   - Go to [sanity.io/manage](https://sanity.io/manage)
   - Add `http://localhost:3000` to allowed origins

6. **Start development server**
   ```bash
   pnpm dev
   ```

7. **Access the site**
   - Website: [http://localhost:3000](http://localhost:3000)
   - Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)

## 📝 Available Scripts

```bash
# Development
pnpm dev              # Start Next.js dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Sanity Commands
pnpm sanity:deploy    # Deploy Sanity schemas
pnpm sanity:manage    # Open Sanity management dashboard
pnpm sanity:export    # Export Sanity data
pnpm sanity:import    # Import Sanity data
```

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Fast setup guide
- **[docs/development/](./docs/development/)** - Development documentation
  - [project-overview.md](./docs/development/project-overview.md) - Project overview
  - [tech-stack.md](./docs/development/tech-stack.md) - Detailed tech stack
  - [coding-standards.md](./docs/development/coding-standards.md) - Coding standards
- **[docs/deployment/](./docs/deployment/)** - Deployment guides
- **[project_docs/](./project_docs/)** - Project documentation & migration notes

## 🎨 Content Management

### Sanity Studio

Access the embedded Sanity Studio at `/studio` to manage:

- **Projects** - Portfolio projects with details, images, and links
- **Skills** - Technical skills with icons and categories
- **Experience** - Work history and professional experience
- **Education** - Educational background
- **Testimonials** - Client testimonials and reviews
- **Site Settings** - Global site configuration

### Content Types

| Type | Fields |
|------|--------|
| **Projects** | Title, description, technologies, images, links, featured flag |
| **Skills** | Name, icon, category, proficiency level |
| **Experience** | Company, role, duration, description, location |
| **Education** | Institution, degree, field, duration |
| **Testimonials** | Quote, author, company, avatar, rating |

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository

3. **Configure Environment Variables**
   Add these environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`

4. **Deploy**
   - Vercel will automatically build and deploy

5. **Update Sanity CORS**
   - Add your production URL to Sanity CORS settings

## 🐛 Troubleshooting

### Common Issues

**Images not loading from Sanity**
- Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct
- Check CORS settings in Sanity dashboard

**Studio not loading**
- Ensure Sanity is properly initialized
- Check browser console for errors

**Build failures**
- Run `pnpm lint` to check for errors
- Ensure all environment variables are set

### Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

## 📄 License

Private project - All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Content powered by [Sanity](https://sanity.io)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons by [Lucide](https://lucide.dev)
- UI components from [shadcn/ui](https://ui.shadcn.com)

---

**Made with ❤️ by Melwyn Titus**
