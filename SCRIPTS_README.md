# 🚀 OSED Website - Quick Start Scripts

Three easy batch scripts to run your website:

## 1. **run.bat** - Start Development Server ⭐ (Use This First!)

**What it does:**
- Installs all dependencies (if not already installed)
- Installs React Router (required for routing)
- Starts the Vite dev server

**How to use:**
- Double-click `run.bat` in Windows Explorer
- OR open Command Prompt and type: `run.bat`

**What you'll see:**
```
Website will open at:
http://localhost:3000

Press Ctrl+C to stop the server
```

The website will automatically open in your browser with:
- ✅ Full OSED branding with logo
- ✅ Red CTA buttons
- ✅ All 5 pages (Home, About, Coaching, Testimonials, Contact)
- ✅ Mobile-responsive design
- ✅ Hot reload (changes update instantly)

**Stop it:** Press `Ctrl+C` in the terminal

---

## 2. **build.bat** - Create Production Build

**What it does:**
- Compiles TypeScript
- Optimizes React code
- Bundles assets with Tailwind CSS
- Creates `dist/` folder for deployment

**How to use:**
- Double-click `build.bat` in Windows Explorer
- Build runs automatically
- Preview opens at http://localhost:4173

**Use this before:**
- Deploying to Vercel
- Creating a production release
- Sending to clients

---

## 3. **test.bat** - Run Tests

**What it does:**
- Installs test dependencies (if needed)
- Runs Vitest test suite
- Shows test results

**How to use:**
- Double-click `test.bat` in Windows Explorer
- Tests run and show results

**Currently includes:**
- Basic smoke tests
- Package.json validation

---

## 📋 Command Reference

If you prefer command line, here are the commands each script runs:

### Development:
```bash
npm install
npm install react-router-dom @types/react-router-dom
npm run dev
```

### Production Build:
```bash
npm run build
npm run preview
```

### Tests:
```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm run test
```

---

## 🎯 Quick Start Guide

### First Time Setup (Recommended):
1. **Double-click `run.bat`** ← Start here!
2. Website opens at http://localhost:3000
3. You should see:
   - OSED logo in top-left header
   - "One Step Every Day" tagline
   - Large red "Apply for Coaching" button
   - All navigation links working

### Testing the Site:
- **Homepage:** Hero section with logo, problem statement, philosophy
- **About:** Founder story and brand values
- **Coaching:** Services and FAQ
- **Testimonials:** Client success stories
- **Contact:** Application form

### Making Changes:
1. Edit `.tsx` files (HomePage.tsx, AboutPage.tsx, etc.)
2. Save the file
3. Changes appear instantly in browser (Hot Reload)
4. No need to restart the server

### Ready to Deploy:
1. Double-click `build.bat`
2. Wait for build to complete
3. A `dist/` folder is created with production files
4. Deploy that `dist/` folder to Vercel

---

## 🛠️ Troubleshooting

### "npm is not recognized"
- You need Node.js installed
- Download from https://nodejs.org/
- Restart your computer after installing

### "Port 3000 already in use"
- Another app is using port 3000
- Close that app or change the port in vite.config.ts
- Or press Ctrl+C in the running terminal and try again

### "Dependencies won't install"
- Delete `node_modules` folder and `package-lock.json`
- Run the script again (it will reinstall everything)

### "React Router not loading"
- The build process automatically installs it
- If issues persist, manually run:
  ```bash
  npm install react-router-dom @types/react-router-dom
  ```

---

## 📁 Project Files

**Main files to edit:**
- `HomePage.tsx` - Homepage content
- `AboutPage.tsx` - About page
- `CoachingPage.tsx` - Coaching services
- `TestimonialsPage.tsx` - Client testimonials
- `ContactPage.tsx` - Contact form
- `Layout.tsx` - Header/Footer (navigation)

**Configuration:**
- `tailwind.config.js` - Colors and styles
- `vite.config.ts` - Build settings
- `tsconfig.json` - TypeScript settings

**Documentation:**
- `README.md` - Full technical docs
- `QUICK_START.md` - Setup guide
- `BRAND_GUIDE.md` - Logo and colors
- `TEST_REPORT.md` - Test results

---

## 🎨 Customization

### Update Contact Email:
Edit `Layout.tsx` and `ContactPage.tsx`, change:
```
dominic@osed.com
```
to your email

### Add Social Media Links:
Edit `Layout.tsx` footer section:
```
href="https://instagram.com/yourname"
href="https://tiktok.com/yourname"
```

### Change Colors:
Edit `tailwind.config.js` and `index.css` for custom colors

### Update Logo:
Replace the SVG in `Layout.tsx` and `HomePage.tsx` with your logo

---

## 📊 Performance Tips

- **Keep dependencies minimal** - Only add what you need
- **Use lazy loading** - For images and heavy components
- **Optimize images** - Compress before adding to site
- **Monitor build size** - Run `npm run build` and check dist/ folder size

---

## 🚀 Deploy to Vercel

1. Run `build.bat` to create dist/ folder
2. Push to GitHub
3. Connect to Vercel
4. Select GitHub repo
5. Vercel auto-deploys on every push

**OR** connect Vercel directly:
- Create account at vercel.com
- Click "Import Project"
- Select your GitHub repo
- Deploy!

---

## 💡 Next Steps

1. ✅ Run the website with `run.bat`
2. ✅ Customize content (emails, social links, testimonials)
3. ✅ Test the forms
4. ✅ Build for production with `build.bat`
5. ✅ Deploy to Vercel

---

**That's it! Your OSED website is ready to go.** 🎉

For detailed docs, see `README.md` and `QUICK_START.md`

Need help? Check the troubleshooting section above or review the documentation files.

---

**One step every day. Let's build your coaching business! 💪**
