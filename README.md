# Melwyn Titus Portfolio

A modern portfolio website showcasing full-stack development expertise with cutting-edge web technologies and animations.

## About the Project

**Live Site**: [melwyntitus.vercel.app](https://melwyntitus.vercel.app)

This portfolio serves as a digital showcase for Melwyn Titus, featuring:

- Modern dark theme with glass morphism effects
- High-performance animations and transitions
- Headless CMS for content management
- Responsive design with mobile-first approach
- SEO optimization with structured data
- Smooth scrolling experience
- Command menu navigation (⌘K)

## Tech Stack

### Core Framework
| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 16.1.4 | React framework |
| [React](https://react.dev/) | 19.2.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type-safe development |
| [Node.js](https://nodejs.org/) | 18+ | JavaScript runtime |

### Styling & UI
| Technology | Purpose |
|------------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com/) | Component library |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lenis](https://lenis.studiofreight.com/) | Smooth scroll |

### 3D & Graphics
| Technology | Purpose |
|------------|---------|
| [Three.js](https://threejs.org/) | 3D graphics |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | React renderer |
| [React Three Drei](https://github.com/pmndrs/drei) | Three.js helpers |

### CMS & Backend
| Technology | Purpose |
|------------|---------|
| [Sanity CMS](https://www.sanity.io/) | Content management |
| [next-sanity](https://github.com/sanity-io/next-sanity) | Sanity integration |

### Development Tools
| Technology | Purpose |
|------------|---------|
| [pnpm](https://pnpm.io/) | Package manager |
| [ESLint](https://eslint.org/) | Code linting |
| [Turbopack](https://turbo.build/pack) | Next.js bundler |

## Project Structure

```
melwyn-website/
├── app/                 # Next.js App Router
│   ├── (routes)/        # Route groups
│   ├── actions/         # Server actions
│   ├── components/      # App-level components
│   └── studio/          # Sanity Studio
│
├── components/          # React components
│   ├── features/        # Page-specific components
│   ├── layouts/         # Layout components
│   ├── providers/       # Context providers
│   └── ui/              # Reusable UI components
│
├── lib/                 # Utilities & configs
│   ├── config/          # Configuration files
│   ├── services/        # External services
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
│
├── sanity/              # Sanity CMS config
│   ├── lib/             # Sanity utilities
│   └── schemas/         # Content schemas
│
├── public/              # Static assets
│   ├── assets/          # Global assets
│   ├── font/            # Custom fonts
│   └── home/            # Home page images
│
├── docs/                # Documentation
│   ├── api/             # API docs
│   ├── deployment/      # Deployment guides
│   └── development/     # Dev guides
│
├── project_docs/        # Project documentation
├── scripts/             # Utility scripts
└── styles/              # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm (`npm install -g pnpm`)
- Sanity account

### Setup
1. Clone repository:
   ```bash
   git clone https://github.com/devtitus/My_Final_Portfolio_Website.git
   cd melwyn-website
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Configure environment:
   ```bash
   cp .env.example .env.local
   ```
   Add Sanity credentials to `.env.local`

4. Start development server:
   ```bash
   pnpm dev
   ```

## Documentation
- [Quick Start Guide](./QUICK_START.md)
- [Development Documentation](./docs/development/)
- [Deployment Guides](./docs/deployment/)
- [Project Documentation](./project_docs/)

## Deployment
1. Push to GitHub:
   ```bash
   git push origin main
   ```
2. Import to Vercel
3. Configure environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Update Sanity CORS with production URL

## License
Private project - All rights reserved

## Acknowledgments
- Built with Next.js
- Content managed by Sanity
- UI components from shadcn/ui
