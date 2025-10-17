# 🚀 My Portfolio - Next.js + Sanity CMS

A modern portfolio website built with Next.js 15 and powered by Sanity CMS for flexible content management.

## ✨ Features

- ⚡ **Next.js 15** with App Router and Turbopack
- 🎨 **Sanity CMS** for content management
- 📱 **Responsive Design** with Tailwind CSS
- 🎭 **Framer Motion** animations
- 🌙 **Dark Mode** support
- 📝 **TypeScript** for type safety
- 🖼️ **Optimized Images** via Sanity CDN

## 🎯 Quick Start

### Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Sanity account (free at [sanity.io](https://sanity.io))

### Setup Instructions

**📖 For detailed step-by-step instructions, see [`SETUP_CHECKLIST.md`](./SETUP_CHECKLIST.md)**

#### Quick Setup (20 minutes):

1. **Create Sanity Project**
   - Visit [https://www.sanity.io/](https://www.sanity.io/)
   - Create new project and copy your Project ID

2. **Configure Environment**
   ```bash
   copy .env.example .env.local
   ```
   Add your Sanity Project ID to `.env.local`

3. **Initialize Sanity**
   ```bash
   npx sanity init --env
   npx sanity deploy
   ```

4. **Configure CORS** (in Sanity dashboard)
   - Add `http://localhost:3000` to allowed origins

5. **Start Development Server**
   ```bash
   pnpm install
   pnpm dev
   ```

6. **Access Sanity Studio**
   - Visit `http://localhost:3000/studio`
   - Add content and publish!

## 📚 Documentation

- **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** - Step-by-step setup guide
- **[QUICK_START.md](./QUICK_START.md)** - Fast setup guide
- **[SANITY_SETUP.md](./SANITY_SETUP.md)** - Detailed Sanity documentation
- **[SANITY_MIGRATION_COMPLETE.md](./SANITY_MIGRATION_COMPLETE.md)** - Migration summary

## 🛠️ Available Scripts

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

## 📁 Project Structure

```
my_portfolio_new/
├── app/                          # Next.js App Router
│   ├── pages/                    # Page components
│   ├── queries/sanity/           # Sanity query functions
│   └── studio/                   # Embedded Sanity Studio
├── sanity/                       # Sanity configuration
│   ├── schemas/                  # Content schemas
│   │   ├── skill.ts              # Skills schema
│   │   └── testimonial.ts        # Testimonials schema
│   └── lib/                      # Sanity utilities
├── components/                   # React components
└── public/                       # Static assets
```

## 🎨 Content Management

### Access Studio
Visit `http://localhost:3000/studio` to manage:
- ✅ Skills
- ✅ Testimonials
- 🔜 Projects (coming soon)
- 🔜 Blog Posts (coming soon)

### Content Types

**Skills**
- Skill name
- Icon image
- Display order

**Testimonials**
- Testimonial text
- Name & Company
- Avatar image
- Display order

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **CMS**: Sanity.io
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Language**: TypeScript
- **Package Manager**: pnpm

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `NEXT_PUBLIC_SANITY_API_VERSION`
4. Deploy!

Don't forget to add your production URL to Sanity CORS settings.

## 🐛 Troubleshooting

See [`SETUP_CHECKLIST.md`](./SETUP_CHECKLIST.md) troubleshooting section or check:

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Community](https://www.sanity.io/community)

## 📄 License

Private project - All rights reserved.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Content management by [Sanity](https://sanity.io)
- Styled with [Tailwind CSS](https://tailwindcss.com)
