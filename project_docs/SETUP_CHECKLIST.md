# 🎯 Sanity CMS Setup Checklist

Follow these steps in order to get your portfolio running with Sanity CMS!

---

## Pre-Setup ✅

- [x] Prismic removed
- [x] Sanity dependencies installed
- [x] Project structure created
- [x] Schemas configured
- [x] Components updated

---

## Your Setup Tasks (20 minutes)

### ☐ Step 1: Create Sanity Account (5 min)

1. [ ] Go to [https://www.sanity.io/](https://www.sanity.io/)
2. [ ] Click "Sign up" or "Get started"
3. [ ] Sign up with:
   - [ ] GitHub (recommended)
   - [ ] Google
   - [ ] Email

**Done?** ✓ Move to Step 2

---

### ☐ Step 2: Create Sanity Project (3 min)

1. [ ] Click **"Create new project"** in Sanity dashboard
2. [ ] Enter project details:
   - [ ] Project name: `My Portfolio` (or your choice)
   - [ ] Organization: Select or create one
3. [ ] Create dataset:
   - [ ] Dataset name: `production`
   - [ ] Privacy: `Public`
4. [ ] **IMPORTANT**: Copy your Project ID
   - [ ] Format: `abc123xyz` (random string)
   - [ ] Save it somewhere - you'll need it next!

**Done?** ✓ Move to Step 3

---

### ☐ Step 3: Configure Environment Variables (2 min)

1. [ ] Open your project in VS Code (or your editor)
2. [ ] In the root directory (`my_portfolio_new`), create `.env.local`:
   ```bash
   # Windows
   copy .env.example .env.local
   
   # Mac/Linux
   cp .env.example .env.local
   ```
3. [ ] Open `.env.local` file
4. [ ] Replace `your_project_id_here` with your actual Project ID:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```
5. [ ] Save the file

**Done?** ✓ Move to Step 4

---

### ☐ Step 4: Initialize Sanity (3 min)

Open your terminal in the `my_portfolio_new` directory:

1. [ ] Run the initialization command:
   ```bash
   npx sanity init --env
   ```

2. [ ] Answer the prompts:
   - [ ] **"Select project to use"**: Choose your project from the list
   - [ ] **"Select dataset"**: Select `production`
   - [ ] **"Project output path"**: Press Enter (use current directory)
   - [ ] **"Add configuration files"**: Type `Y` and press Enter
   - [ ] **"Select project template"**: Choose `Clean project with no predefined schemas`

3. [ ] Wait for initialization to complete

**Done?** ✓ Move to Step 5

---

### ☐ Step 5: Deploy Schemas (1 min)

Still in your terminal:

1. [ ] Run the deploy command:
   ```bash
   npx sanity deploy
   ```

2. [ ] Wait for schemas to deploy (Skills & Testimonials)

3. [ ] You should see: ✓ Deployed successfully

**Done?** ✓ Move to Step 6

---

### ☐ Step 6: Configure CORS (2 min)

This allows your website to fetch data from Sanity:

1. [ ] Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. [ ] Click on your project
3. [ ] In the left sidebar, click **API**
4. [ ] Click the **CORS Origins** tab
5. [ ] Click **Add CORS origin** button
6. [ ] Enter origin details:
   - [ ] **Origin**: `http://localhost:3000`
   - [ ] **Allow credentials**: ✓ Check this box
7. [ ] Click **Save**
8. [ ] (Optional) Add your production domain later when you deploy

**Done?** ✓ Move to Step 7

---

### ☐ Step 7: Start Development Server (1 min)

Back to your terminal:

1. [ ] Run the development server:
   ```bash
   pnpm dev
   ```

2. [ ] Wait for the server to start
3. [ ] You should see: `Local: http://localhost:3000`
4. [ ] Keep this terminal window open!

**Done?** ✓ Move to Step 8

---

### ☐ Step 8: Access Sanity Studio (1 min)

1. [ ] Open your browser
2. [ ] Go to: `http://localhost:3000/studio`
3. [ ] You'll be asked to log in
4. [ ] Click **Sign in** and authenticate with Sanity
5. [ ] You should see the Sanity Studio interface!

**Done?** ✓ Move to Step 9

---

### ☐ Step 9: Add Your First Skill (2 min)

In the Sanity Studio:

1. [ ] Click **Skills** in the left sidebar
2. [ ] Click **Create** button (or ➕ icon)
3. [ ] Fill in the fields:
   - [ ] **Skill Name**: `React` (or your favorite skill)
   - [ ] **Skill Icon**: Click to upload an icon image
     - [ ] Browse and select an image from your computer
     - [ ] Wait for upload to complete
   - [ ] **Display Order**: `1`
4. [ ] Click the **Publish** button (top right)
   - [ ] Don't just save - make sure to PUBLISH!
5. [ ] You should see: ✓ Published

**Done?** ✓ Move to Step 10

---

### ☐ Step 10: Add Your First Testimonial (2 min)

Still in Sanity Studio:

1. [ ] Click **Testimonials** in the left sidebar
2. [ ] Click **Create** button
3. [ ] Fill in the fields:
   - [ ] **Testimonial**: `"Working with [your name] was amazing! Highly skilled developer."`
   - [ ] **Name**: `John Doe`
   - [ ] **Company**: `Tech Corp`
   - [ ] **Avatar**: Upload a profile image
   - [ ] **Display Order**: `1`
4. [ ] Click **Publish** button
5. [ ] You should see: ✓ Published

**Done?** ✓ Move to Step 11

---

### ☐ Step 11: View Your Live Content! (1 min)

1. [ ] Go back to your browser
2. [ ] Visit: `http://localhost:3000`
3. [ ] Scroll to the Skills section
4. [ ] You should see your skill appear! 🎉
5. [ ] Scroll to the Testimonials section
6. [ ] You should see your testimonial! 🎉

**Done?** ✓ You're all set!

---

## 🎉 Congratulations!

You've successfully set up Sanity CMS! Your portfolio is now powered by a modern, flexible content management system.

---

## 🔄 Quick Reference

### Add More Skills
1. Go to `localhost:3000/studio`
2. Click **Skills** → **Create**
3. Fill in details → **Publish**

### Add More Testimonials
1. Go to `localhost:3000/studio`
2. Click **Testimonials** → **Create**
3. Fill in details → **Publish**

### Restart Dev Server
```bash
# Stop server: Ctrl + C
# Start again:
pnpm dev
```

### Access Sanity Dashboard
Visit: [https://www.sanity.io/manage](https://www.sanity.io/manage)

---

## 📚 Next Steps

- [ ] Add more skills (5-10 recommended)
- [ ] Add more testimonials (3-5 recommended)
- [ ] Read `SANITY_SETUP.md` for advanced features
- [ ] Explore the Vision plugin in Studio (query tester)
- [ ] Consider adding more schema types (Projects, Blog, etc.)

---

## 🐛 Troubleshooting

### "Missing environment variable" error
- [ ] Check `.env.local` exists in root directory
- [ ] Verify Project ID is correct
- [ ] Restart dev server: `Ctrl + C`, then `pnpm dev`

### Can't access Studio
- [ ] Make sure dev server is running
- [ ] Clear browser cache (Ctrl + Shift + Delete)
- [ ] Try incognito/private window

### No content showing
- [ ] Verify you clicked **Publish** (not just Save)
- [ ] Check CORS settings in Sanity
- [ ] Check browser console (F12) for errors
- [ ] Refresh the page (Ctrl + R)

### Images not loading
- [ ] Ensure images uploaded successfully in Studio
- [ ] Check Project ID matches in `.env.local`
- [ ] Verify CORS is configured

---

## 📞 Need Help?

- **Quick Start**: Read `QUICK_START.md`
- **Detailed Docs**: Read `SANITY_SETUP.md`
- **Sanity Docs**: [https://www.sanity.io/docs](https://www.sanity.io/docs)
- **Community**: [https://www.sanity.io/community](https://www.sanity.io/community)

---

**Total Time**: ~20 minutes
**Status**: Ready to launch! 🚀