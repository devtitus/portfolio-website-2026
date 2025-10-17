# Sanity CMS Setup Guide

## ✅ Installation Complete

All Sanity dependencies and configurations have been set up in your project!

## 📦 Installed Packages

### Production Dependencies
- `next-sanity` - Next.js integration for Sanity
- `@sanity/image-url` - Image URL builder
- `@sanity/vision` - GROQ query testing tool
- `@portabletext/react` - Portable Text renderer

### Dev Dependencies
- `sanity` - Sanity Studio
- `@sanity/client` - Sanity client library

## 📁 Project Structure Created

```
my_portfolio_new/
├── sanity/
│   ├── env.ts                    # Environment configuration
│   ├── sanity.config.ts          # Main Sanity configuration
│   ├── lib/
│   │   ├── client.ts             # Sanity client setup
│   │   └── image.ts              # Image URL builder utilities
│   └── schemas/
│       ├── index.ts              # Schema exports
│       ├── skill.ts              # Skills schema
│       └── testimonial.ts        # Testimonials schema
├── app/
│   ├── queries/
│   │   └── sanity/
│   │       ├── getSkills.ts      # Skills query function
│   │       └── getTestimonials.ts # Testimonials query function
│   └── studio/
│       └── [[...tool]]/
│           ├── page.tsx          # Studio page
│           └── layout.tsx        # Studio layout
└── .env.example                  # Environment variables template
```

## 🚀 Next Steps: Create Your Sanity Project

### Step 1: Create a Sanity Account and Project

1. Go to [https://www.sanity.io/](https://www.sanity.io/)
2. Sign up or log in
3. Click "Create new project"
4. Choose a name for your project (e.g., "My Portfolio")
5. Choose a dataset name (use `production`)
6. Copy your **Project ID** - you'll need this next!

### Step 2: Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   copy .env.example .env.local
   ```

2. Edit `.env.local` and add your Sanity credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

3. Replace `your_project_id_here` with the Project ID from Sanity

### Step 3: Deploy Sanity Schemas

You need to deploy your schemas (Skills and Testimonials) to Sanity:

```bash
cd my_portfolio_new
npx sanity@latest init --env
```

When prompted:
- **Select project**: Choose the project you created
- **Select dataset**: Choose `production`
- **Project output path**: Press Enter (use current directory)
- **Would you like to add configuration files**: Yes
- **Select project template**: Clean project with no predefined schemas

After initialization completes:

```bash
npx sanity deploy
```

This will deploy your schemas to Sanity.

### Step 4: Configure CORS Settings

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **API** → **CORS Origins**
4. Click **Add CORS origin**
5. Add these origins:
   - `http://localhost:3000` (for development)
   - `https://yourdomain.com` (your production domain)
6. Check **Allow credentials**
7. Click **Save**

### Step 5: Start Your Development Server

```bash
pnpm dev
```

Your Next.js app will be available at `http://localhost:3000`

### Step 6: Access Sanity Studio

Visit `http://localhost:3000/studio` to access your embedded Sanity Studio!

You can now:
- Add Skills
- Add Testimonials
- Manage all your content

## 📝 Adding Content

### Adding Skills

1. Go to `http://localhost:3000/studio`
2. Click **Skills** in the sidebar
3. Click **Create new**
4. Fill in:
   - **Skill Name**: e.g., "React", "TypeScript", "Node.js"
   - **Skill Icon**: Upload an icon image
   - **Display Order**: Set a number (lower numbers appear first)
5. Click **Publish**

### Adding Testimonials

1. Go to `http://localhost:3000/studio`
2. Click **Testimonials** in the sidebar
3. Click **Create new**
4. Fill in:
   - **Testimonial**: The testimonial text
   - **Name**: Person's full name
   - **Company**: Company or organization name
   - **Avatar**: Upload profile photo
   - **Display Order**: Set a number (lower numbers appear first)
5. Click **Publish**

## 🔍 Schema Details

### Skills Schema
```typescript
{
  label: string          // Skill name (e.g., "React")
  icon: image            // Skill icon image
  order: number          // Display order (optional)
}
```

### Testimonials Schema
```typescript
{
  testimonial: text      // Testimonial content
  name: string           // Person's name
  company: string        // Company name
  avatar: image          // Profile photo
  order: number          // Display order (optional)
}
```

## 🎯 Updated Components

The following components now fetch data from Sanity:

- ✅ `app/pages/home/components/skillsSection.tsx`
- ✅ `app/pages/home/components/testimonialSection.tsx`

Both components will automatically display data from Sanity once you add content!

## 🔧 Useful Sanity Commands

### Test GROQ Queries
Visit `http://localhost:3000/studio` and use the Vision plugin (🔍 icon) to test queries.

**Example queries:**

Get all skills:
```groq
*[_type == "skill"] | order(order asc)
```

Get all testimonials:
```groq
*[_type == "testimonial"] | order(order asc)
```

### Export Data
```bash
npx sanity dataset export production backup.tar.gz
```

### Import Data
```bash
npx sanity dataset import backup.tar.gz production
```

### Manage Datasets
```bash
npx sanity dataset list
npx sanity dataset create staging
```

## 🌐 Deploying Sanity Studio

### Option 1: Embedded Studio (Current Setup)
Your studio is already accessible at `/studio` route - no extra deployment needed!

### Option 2: Standalone Studio Deployment
If you prefer a separate studio:

```bash
npx sanity deploy
```

This will deploy your studio to `https://yourproject.sanity.studio`

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use environment variables** for all sensitive data
3. **Set up CORS** properly to restrict access
4. **Use read tokens** for public data, write tokens for admin operations
5. **Limit dataset access** in production

## 📚 Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/docs/nextjs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Schema Types Reference](https://www.sanity.io/docs/schema-types)
- [Content Modeling](https://www.sanity.io/docs/content-modeling)

## 🐛 Troubleshooting

### Issue: "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
**Solution**: Make sure you created `.env.local` and added your Project ID

### Issue: Can't access Studio at /studio
**Solution**: 
1. Check that your dev server is running (`pnpm dev`)
2. Clear your browser cache
3. Check browser console for errors

### Issue: No data showing in components
**Solution**:
1. Make sure you've published content in Sanity Studio
2. Check browser console for fetch errors
3. Verify CORS settings in Sanity
4. Test queries in Vision plugin

### Issue: Images not loading
**Solution**:
1. Verify images are uploaded in Sanity Studio
2. Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` matches your actual project
3. Ensure CORS is configured correctly

## ✨ Next Features to Add

Consider adding these Sanity features to your portfolio:

- **Projects/Portfolio Items** - Showcase your work
- **Blog Posts** - Share articles and tutorials
- **About Page Content** - Dynamic bio and experience
- **Contact Info** - Manage contact details
- **SEO Metadata** - Custom meta tags per page

---

**Setup Status:** ✅ Complete - Ready to create Sanity project and add content!

**Last Updated:** $(date)