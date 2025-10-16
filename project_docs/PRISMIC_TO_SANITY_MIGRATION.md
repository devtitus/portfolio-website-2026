# Prismic to Sanity Migration Guide

## ✅ Cleanup Completed

All Prismic-related code and dependencies have been successfully removed from the project.

## 🗑️ Files Deleted

### Configuration Files
- `prismicio.ts` - Prismic client configuration
- `prismicio-types.d.ts` - Prismic TypeScript type definitions
- `slicemachine.config.json` - Slice Machine configuration

### Directories
- `customtypes/` - Prismic custom types (my_skills, my_testimonials)
- `slices/` - Prismic slices
- `app/api/preview/` - Prismic preview route
- `app/api/exit-preview/` - Prismic exit preview route
- `app/api/revalidate/` - Prismic revalidation route
- `app/api/` - (removed as it became empty)
- `app/queries/` - (removed as it became empty)
- `app/slice-simulator/` - Slice Machine simulator page

### Query Files
- `app/queries/getSkills.ts`
- `app/queries/getTestimonials.ts`

## 📦 Dependencies Removed

### Production Dependencies
- `@prismicio/client`
- `@prismicio/next`
- `@prismicio/react`

### Dev Dependencies
- `@slicemachine/adapter-next`
- `slice-machine-ui`

### Scripts Removed
- `slicemachine` script from package.json

## 🔄 Files Modified

### `package.json`
- Removed all Prismic dependencies
- Removed slicemachine script

### `app/pages/home/components/skillsSection.tsx`
- Removed Prismic query imports
- Added TODO comments for Sanity implementation
- Moved `SkillItem` interface to component file
- Commented out data fetching logic

### `app/pages/home/components/testimonialSection.tsx`
- Removed Prismic query imports
- Added TODO comments for Sanity implementation
- Moved `TestimonialItem` interface to component file
- Commented out data fetching logic

## 🎯 Data Structures to Recreate in Sanity

### 1. Skills Schema
```typescript
export interface SkillItem {
  id: string;
  uid: string | null;
  label: string;      // Skill name (e.g., "React", "TypeScript")
  iconUrl: string;    // URL to skill icon image
}
```

**Prismic Fields:**
- `skill_label` (Text field) → Skill name
- `skill_icon` (Image field) → Icon URL

### 2. Testimonials Schema
```typescript
export interface TestimonialItem {
  id: string;
  uid: string | null;
  testimonial: string;  // The testimonial text
  name: string;        // Person's name
  company: string;     // Company name
  image: string;       // Avatar image URL
}
```

**Prismic Fields:**
- `testimonial` (Text field) → Testimonial content
- `name` (Text field) → Person's name
- `company` (Text field) → Company name
- `avatar` (Image field) → Avatar image URL

## 📝 Environment Variables to Remove

Please manually remove these from your `.env` file:
- `NEXT_PUBLIC_PRISMIC_ENVIRONMENT`
- `NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN`

## 🚀 Next Steps: Implementing Sanity

### 1. Install Sanity Dependencies
```bash
pnpm add next-sanity @sanity/image-url
pnpm add -D @sanity/client
```

### 2. Set Up Sanity Studio (Optional - if you want embedded studio)
```bash
pnpm create sanity@latest
```

### 3. Create Sanity Configuration
Create `sanity/config.ts`:
```typescript
import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
```

### 4. Create Sanity Schemas

**Skills Schema** (`sanity/schemas/skills.ts`):
```typescript
export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
```

**Testimonials Schema** (`sanity/schemas/testimonials.ts`):
```typescript
export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    },
  ],
}
```

### 5. Create Query Functions

**Create** `app/queries/sanity/getSkills.ts`:
```typescript
import { client } from '@/sanity/config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export interface SkillItem {
  id: string;
  uid: string | null;
  label: string;
  iconUrl: string;
}

export const getSkills = async (): Promise<SkillItem[]> => {
  const query = `*[_type == "skill"] | order(order desc) {
    _id,
    label,
    icon
  }`
  
  const skills = await client.fetch(query)
  
  return skills.map((skill: any) => ({
    id: skill._id,
    uid: null,
    label: skill.label,
    iconUrl: builder.image(skill.icon).url(),
  }))
}
```

**Create** `app/queries/sanity/getTestimonials.ts`:
```typescript
import { client } from '@/sanity/config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export interface TestimonialItem {
  id: string;
  uid: string | null;
  testimonial: string;
  name: string;
  company: string;
  image: string;
}

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  const query = `*[_type == "testimonial"] | order(order desc) {
    _id,
    testimonial,
    name,
    company,
    avatar
  }`
  
  const testimonials = await client.fetch(query)
  
  return testimonials.map((testimonial: any) => ({
    id: testimonial._id,
    uid: null,
    testimonial: testimonial.testimonial,
    name: testimonial.name,
    company: testimonial.company,
    image: builder.image(testimonial.avatar).url(),
  }))
}
```

### 6. Update Components

**In `skillsSection.tsx`:**
```typescript
import { getSkills, SkillItem } from "@/app/queries/sanity/getSkills";
```

**In `testimonialSection.tsx`:**
```typescript
import { getTestimonials, TestimonialItem } from "@/app/queries/sanity/getTestimonials";
```

Then uncomment the useEffect fetch logic in both components.

### 7. Environment Variables

Add to your `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SANITY_TOKEN=your_token_here  # Only if you need write access
```

## ⚠️ Current Warnings

The following warnings exist but are expected until Sanity is implemented:
- `app/pages/home/components/skillsSection.tsx`: 'setSkills' is assigned but never used
- `app/pages/home/components/testimonialSection.tsx`: 'setTestimonials' is assigned but never used

These warnings will disappear once you uncomment the data fetching logic after setting up Sanity.

## 📚 Resources

- [Sanity.io Documentation](https://www.sanity.io/docs)
- [next-sanity Documentation](https://github.com/sanity-io/next-sanity)
- [Sanity Schema Types](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)

---

**Migration completed on:** $(date)
**Status:** ✅ Ready for Sanity implementation