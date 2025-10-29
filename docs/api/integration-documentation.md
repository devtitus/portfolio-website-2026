# Integration & API Documentation

## Overview

This portfolio website is designed as a client-side application with minimal external integrations. The focus is on performance, user experience, and seamless navigation without complex API dependencies.

## Current Integrations

### 1. Next.js App Router Integration

#### Routing Configuration
```typescript
// next.config.ts
const nextConfig: NextConfig = {
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
};
```

**Purpose**: Single Page Application (SPA) routing with URL synchronization
**Implementation**: Client-side routing with server-side URL rewriting
**Benefits**: 
- SEO-friendly URLs
- Browser history support
- No page reloads
- Fast navigation

#### Navigation Integration
```typescript
// app/page.tsx - Main routing logic
const MainPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("home");

  // URL synchronization
  useEffect(() => {
    if (currentPage === "home" && pathname !== "/") {
      router.push("/");
    } else if (currentPage !== "home" && pathname !== `/${currentPage}`) {
      router.push(`/${currentPage}`);
    }
  }, [currentPage, pathname, router]);
};
```

### 2. Browser APIs Integration

#### Clipboard API
```typescript
// Email copy functionality
const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }
};
```

**Features**:
- Modern Clipboard API with fallback
- User feedback (copied state)
- Cross-browser compatibility
- Error handling

#### Keyboard Event API
```typescript
// Command menu keyboard shortcuts
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [isOpen, setIsOpen]);
```

**Features**:
- Global keyboard shortcuts (⌘K, Ctrl+K)
- Escape key handling
- Event cleanup
- Cross-platform support (Mac/Windows)

### 3. Font Integration

#### Google Fonts (Geist)
```typescript
// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});
```

**Features**:
- Optimized font loading
- CSS variable integration
- Automatic font optimization
- Reduced layout shift

#### Custom Fonts (Excon & Satoshi)
```css
/* styles/globals.css */
@font-face {
  font-family: "Excon";
  src: url("/font/excon/Excon-Variable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
```

**Features**:
- Variable font support
- Multiple weight ranges
- Font display optimization
- Self-hosted fonts

### 4. Image Optimization Integration

#### Next.js Image Component
```tsx
// Optimized image loading
<Image
  src="/navbar/logo.png"
  className={styles.logo}
  width={48}
  height={48}
  alt="Logo"
  priority={true} // For above-the-fold images
/>
```

**Features**:
- Automatic format optimization (WebP, AVIF)
- Responsive image sizing
- Lazy loading
- Priority loading for critical images

### 5. CSS Integration

#### Tailwind CSS Integration
```javascript
// tailwind.config.js
export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // ... custom color system
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
}
```

**Features**:
- CSS custom properties integration
- Dark mode support
- Custom animation utilities
- Design system consistency

#### CSS Modules Integration
```typescript
// Component styling
import styles from "./component.module.css";

<div className={styles.container}>
  <h1 className={styles.title}>Content</h1>
</div>
```

**Features**:
- Scoped CSS
- Type safety
- Build-time optimization
- No naming conflicts

### 6. Sanity CMS Integration

#### Client Setup
```typescript
// sanity/lib/client.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
});
```

#### Query Functions
```typescript
// lib/services/sanity/getSiteSettings.ts
import { client } from '@/sanity/lib/client';

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0]{
      title,
      description,
      _updatedAt
    }
  `);
}
```

## External Service Integrations

### 1. Social Media Integration (Planned)

#### LinkedIn Integration
```typescript
// Future implementation
const linkedinProfile = "https://linkedin.com/in/melwyntitus";
const openLinkedIn = () => {
  window.open(linkedinProfile, "_blank", "noopener,noreferrer");
};
```

#### GitHub Integration
```typescript
// Future implementation
const githubProfile = "https://github.com/melwyntitus";
const openGitHub = () => {
  window.open(githubProfile, "_blank", "noopener,noreferrer");
};
```

### 2. Analytics Integration (Planned)

#### Google Analytics 4
```typescript
// Future implementation
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

#### Vercel Analytics
```typescript
// Future implementation
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div>
      {/* App content */}
      <Analytics />
    </div>
  );
}
```

### 3. Contact Form Integration (Planned)

#### Email Service Integration
```typescript
// Future implementation - API route
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    
    // Email sending logic
    const transporter = nodemailer.createTransporter({
      // SMTP configuration
    });
    
    await transporter.sendMail({
      from: email,
      to: 'm.works.gd@gmail.com',
      subject: `Contact from ${name}`,
      text: message,
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
```

#### Form Handling
```typescript
// Future implementation
const handleSubmit = async (formData: FormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSuccess('Message sent successfully!');
    } else {
      setError('Failed to send message. Please try again.');
    }
  } catch (error) {
    setError('Network error. Please try again.');
  }
};
```

## API Architecture (Future)

### 1. Contact API
```
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string", 
  "message": "string"
}

Response:
{
  "success": boolean,
  "message": "string"
}
```

### 2. Projects API
```
GET /api/projects
Response:
{
  "projects": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "technologies": ["string"],
      "image": "string",
      "liveUrl": "string",
      "githubUrl": "string"
    }
  ]
}
```

### 3. Blog API (Future)
```
GET /api/blog
Response:
{
  "posts": [
    {
      "id": "string",
      "title": "string",
      "excerpt": "string",
      "content": "string",
      "publishedAt": "string",
      "tags": ["string"]
    }
  ]
}
```

## Environment Configuration

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://melwyntitus.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
```

### Configuration Management
```typescript
// lib/config.ts
export const config = {
  site: {
    name: 'Melwyn Titus Portfolio',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    description: 'Full Stack Developer Portfolio',
  },
  contact: {
    email: 'm.works.gd@gmail.com',
    social: {
      linkedin: 'https://linkedin.com/in/melwyntitus',
      github: 'https://github.com/melwyntitus',
      twitter: 'https://twitter.com/melwyntitus',
    },
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID,
  },
  sanity: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
};
```

## Security Considerations

### 1. Content Security Policy
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
};
```

### 2. Rate Limiting (Future)
```typescript
// lib/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10 s"),
});
```

### 3. Input Validation
```typescript
// lib/validations.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});
```

## Performance Monitoring

### 1. Core Web Vitals
```typescript
// lib/analytics.ts
export const reportWebVitals = (metric: any) => {
  if (metric.label === 'web-vital') {
    // Send to analytics service
    console.log(metric);
  }
};
```

### 2. Error Tracking (Future)
```typescript
// lib/error-tracking.ts
export const logError = (error: Error, context?: any) => {
  // Send to error tracking service
  console.error('Error:', error, 'Context:', context);
};
```

## Integration Testing

### 1. API Testing
```typescript
// __tests__/api/contact.test.ts
import { POST } from '@/app/api/contact/route';
import { NextRequest } from 'next/server';

describe('/api/contact', () => {
  it('should send contact email successfully', async () => {
    const request = new NextRequest('http://localhost:3000/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(200);
  });
});
```

### 2. Integration Testing
```typescript
// __tests__/integration/navigation.test.ts
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import MainPage from '@/app/page';

jest.mock('next/navigation');

describe('Navigation Integration', () => {
  it('should navigate between pages without reload', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

    render(<MainPage />);
    
    fireEvent.click(screen.getByText('About'));
    expect(mockPush).toHaveBeenCalledWith('/about');
  });
});
```

## Migration Considerations

### Old Structure Updates
- Update import paths from `@/app/utils/` to `@/lib/utils/`
- Update import paths from `@/app/queries/` to `@/lib/services/`
- Update import paths from `@/app/components/` to `@/components/`
- Use centralized types from `@/lib/types/`

### API Migration Strategy
1. Phase 1: Static data integration (Sanity CMS)
2. Phase 2: Basic analytics integration
3. Phase 3: Contact form API
4. Phase 4: Social media integrations

## Best Practices

### Security
- Always validate input data
- Use environment variables for sensitive data
- Implement rate limiting for API endpoints
- Use HTTPS for all external requests

### Performance
- Cache API responses appropriately
- Use proper loading states
- Implement error boundaries
- Optimize images and assets

### Error Handling
- Provide meaningful error messages
- Log errors appropriately (different levels for dev/prod)
- Have fallback mechanisms for failed integrations
- Test error scenarios thoroughly