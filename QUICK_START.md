# 🚀 Sanity CMS Quick Start Guide

## ✅ What's Already Done

- ✅ Sanity dependencies installed
- ✅ Project structure created
- ✅ Schemas configured (Skills & Testimonials)
- ✅ Query functions ready
- ✅ Components updated to use Sanity
- ✅ Embedded Sanity Studio configured at `/studio`

## 🎯 What You Need to Do Now

### Step 1: Create Sanity Account & Project (5 minutes)

1. Visit [https://www.sanity.io/](https://www.sanity.io/)
2. Sign up with GitHub, Google, or Email
3. Click **"Create new project"**
4. Enter project name: `My Portfolio` (or your choice)
5. Select dataset: `production`
6. **Copy your Project ID** (looks like: `abc12xyz`)

### Step 2: Configure Environment Variables (2 minutes)

1. Create `.env.local` file in the root directory:
   ```bash
   # In my_portfolio_new directory
   copy .env.example .env.local
   ```

2. Open `.env.local` and add your Project ID:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc12xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

### Step 3: Initialize Sanity (3 minutes)

Run these commands in your terminal:

```bash
# Navigate to your project
cd my_portfolio_new

# Initialize Sanity (this links your local project to Sanity cloud)
npx sanity init --env

# When prompted:
# - Select your project from the list
# - Choose 'production' dataset
# - Press Enter for default output path
# - Select "Yes" to add configuration files
# - Choose "Clean project with no predefined schemas"
```

### Step 4: Deploy Schemas (1 minute)

Deploy your Skills and Testimonials schemas:

```bash
npx sanity deploy
```

This uploads your schema definitions to Sanity.

### Step 5: Configure CORS (2 minutes)

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project
3. Click **API** → **CORS Origins**
4. Click **Add CORS origin**
5. Add: `http://localhost:3000`
6. Check **"Allow credentials"**
7. Click **Save**

### Step 6: Start Development Server (1 minute)

```bash
pnpm dev
```

Visit: `http://localhost:3000`

### Step 7: Access Sanity Studio & Add Content (5 minutes)

1. Open: `http://localhost:3000/studio`
2. Sign in with your Sanity account
3. You'll see **Skills** and **Testimonials** in the sidebar

**Add a Skill:**
- Click **Skills** → **Create new**
- Skill Name: `React`
- Upload an icon image
- Display Order: `1`
- Click **Publish**

**Add a Testimonial:**
- Click **Testimonials** → **Create new**
- Testimonial: `Great developer to work with!`
- Name: `John Doe`
- Company: `Tech Corp`
- Upload an avatar image
- Display Order: `1`
- Click **Publish**

### Step 8: View Your Content (Instant!)

Go back to `http://localhost:3000` - your Skills and Testimonials should now appear!

## 🎉 You're Done!

Your portfolio is now powered by Sanity CMS!

## 📝 Common Tasks

### Add More Skills
1. Go to `/studio`
2. Click **Skills** → **Create new**
3. Fill in details and **Publish**

### Add More Testimonials
1. Go to `/studio`
2. Click **Testimonials** → **Create new**
3. Fill in details and **Publish**

### Test Queries (Advanced)
1. Go to `/studio`
2. Click the **Vision** icon (🔍) in the top bar
3. Try this query:
   ```groq
   *[_type == "skill"] | order(order asc)
   ```

## 🐛 Troubleshooting

### "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
- Make sure `.env.local` exists in the root directory
- Check that the Project ID is correct
- Restart your dev server: `pnpm dev`

### Can't access /studio
- Clear browser cache
- Check console for errors
- Make sure dev server is running

### No data showing
- Verify you clicked **Publish** in Sanity Studio (not just Save)
- Check CORS settings in Sanity
- Check browser console for errors

### Images not loading
- Ensure images are uploaded in Studio
- Verify Project ID matches in `.env.local`
- Check CORS configuration

## 📚 Next Steps

- Read `SANITY_SETUP.md` for detailed documentation
- Explore [Sanity Docs](https://www.sanity.io/docs)
- Learn [GROQ queries](https://www.sanity.io/docs/groq)
- Add more schema types (Projects, Blog Posts, etc.)

## 🔗 Important URLs

- **Your website**: `http://localhost:3000`
- **Sanity Studio**: `http://localhost:3000/studio`
- **Sanity Dashboard**: `https://www.sanity.io/manage`
- **Sanity Docs**: `https://www.sanity.io/docs`

---

**Total Setup Time**: ~20 minutes

**Need Help?** Check `SANITY_SETUP.md` for detailed instructions!