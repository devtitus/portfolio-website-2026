# Deployment & Build Documentation

## Build System Overview

### Package Manager
- **pnpm 10.14.0** - Primary package manager
- **pnpm-workspace.yaml** - Workspace configuration for monorepo support
- **package-lock.json** - Fallback for npm compatibility

### Build Tools
- **Next.js 15.4.6** - Build system and framework
- **TypeScript 5** - Type checking and compilation
- **Turbopack** - Fast bundler for development
- **Webpack** - Production bundler (Next.js default)

## Development Environment Setup

### Prerequisites
```bash
# Required software
- Node.js 18.17+ (LTS recommended)
- pnpm 10.14.0+
- Git
- WSL2 (for Windows development)
```

### Installation
```bash
# Clone repository
git clone <repository-url>
cd my_portfolio_new

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Development Scripts
```json
{
  "scripts": {
    "dev": "pnpm next dev --turbopack",
    "build": "pnpm next build", 
    "start": "pnpm next start",
    "lint": "pnpm next lint"
  }
}
```

## Build Configuration

### Next.js Configuration
```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // URL rewriting for SPA routing
  async rewrites() {
    return [
      {
        source: "/about",
        destination: "/",
      },
      {
        source: "/projects",
        destination: "/",
      },
      {
        source: "/contact", 
        destination: "/",
      },
    ];
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### TypeScript Configuration
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Tailwind CSS Configuration
```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom design system
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        // shadcn/ui color system
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... additional colors
      },
      animation: {
        aurora: "aurora 8s ease-in-out infinite alternate",
        wave: "wave 2s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%": {
            "background-position": "0% 50%",
            transform: "rotate(-5deg) scale(0.9)",
          },
          // ... keyframe definitions
        },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
```

## Build Process

### Development Build
```bash
# Start development server with Turbopack
pnpm dev

# Features:
# - Hot Module Replacement (HMR)
# - Fast refresh
# - TypeScript checking
# - ESLint integration
# - Source maps
```

### Production Build
```bash
# Create production build
pnpm build

# Build process:
# 1. TypeScript compilation
# 2. Next.js optimization
# 3. CSS processing and minification
# 4. Image optimization
# 5. Bundle analysis
# 6. Static generation
```

### Build Output Structure
```
.next/
├── static/           # Static assets
├── server/           # Server-side code
├── standalone/       # Standalone build (if enabled)
├── cache/            # Build cache
└── build-manifest.json
```

## Deployment Options

### 1. Vercel (Recommended)

#### Automatic Deployment
```bash
# Connect to Vercel
npx vercel

# Or push to connected repository
git push origin main
```

#### Vercel Configuration
```json
// vercel.json
{
  "framework": "nextjs",
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "outputDirectory": ".next",
  "functions": {
    "app/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options", 
          "value": "DENY"
        }
      ]
    }
  ]
}
```

#### Environment Variables
```bash
# Vercel dashboard or CLI
NEXT_PUBLIC_SITE_URL=https://melwyntitus.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 2. Netlify

#### Netlify Configuration
```toml
# netlify.toml
[build]
  command = "pnpm build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/about"
  to = "/"
  status = 200

[[redirects]]
  from = "/projects"
  to = "/"
  status = 200

[[redirects]]
  from = "/contact"
  to = "/"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

### 3. Docker Deployment

#### Dockerfile
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN corepack enable pnpm && pnpm build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'

services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### 4. Static Export (Optional)

#### Static Export Configuration
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};
```

#### Build Command
```bash
# Generate static files
pnpm build

# Output will be in 'out' directory
# Can be deployed to any static hosting
```

## Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
pnpm build
pnpm next-bundle-analyzer

# Or with custom script
"analyze": "ANALYZE=true pnpm build"
```

### Image Optimization
```typescript
// Automatic optimization with Next.js Image
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Code Splitting
```typescript
// Dynamic imports for code splitting
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

### Font Optimization
```typescript
// Optimized font loading
import { Geist } from "next/font/google";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: 'swap',
});
```

## Environment Management

### Environment Variables
```bash
# .env.local (development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# .env.production (production)
NEXT_PUBLIC_SITE_URL=https://melwyntitus.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Environment Configuration
```typescript
// lib/env.ts
export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};
```

## CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10.14.0
          
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
        
      - name: Run linting
        run: pnpm lint
        
      - name: Build application
        run: pnpm build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Monitoring & Analytics

### Build Monitoring
```bash
# Check build size
pnpm build
ls -la .next/static

# Monitor bundle size
pnpm next-bundle-analyzer
```

### Performance Monitoring
```typescript
// lib/analytics.ts
export function reportWebVitals(metric: any) {
  if (metric.label === 'web-vital') {
    // Send to analytics
    console.log(metric);
  }
}
```

### Error Tracking
```typescript
// lib/error-tracking.ts
export function logError(error: Error, context?: any) {
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service
    console.error('Error:', error, 'Context:', context);
  }
}
```

## Troubleshooting

### Common Build Issues

#### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf .next
pnpm build
```

#### Dependency Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

#### Build Memory Issues
```bash
# Increase Node.js memory limit
NODE_OPTIONS="--max-old-space-size=4096" pnpm build
```

### Performance Issues

#### Large Bundle Size
```bash
# Analyze bundle
pnpm next-bundle-analyzer

# Check for duplicate dependencies
pnpm list --depth=0
```

#### Slow Build Times
```bash
# Use Turbopack for development
pnpm dev --turbopack

# Enable build cache
NEXT_TELEMETRY_DISABLED=1 pnpm build
```

## Security Considerations

### Build Security
```bash
# Audit dependencies
pnpm audit

# Update dependencies
pnpm update
```

### Runtime Security
```typescript
// Security headers in next.config.ts
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
    },
  ];
}
```