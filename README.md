# OSED - One Step Every Day Coaching Website

A modern, clean fitness and nutrition coaching website built with React, TypeScript, and Tailwind CSS.

## Overview

OSED (One Step Every Day) is a fitness & nutrition coaching brand focused on sustainable transformation through consistency, discipline, and small daily improvements.

**Website Purpose:**
- Communicate OSED mission and philosophy
- Build trust and credibility
- Convert visitors into coaching clients
- Educate on sustainable fitness and nutrition
- Create community around consistency

## Tech Stack

- **Frontend Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **CSS Processing:** PostCSS + Autoprefixer

## Project Structure

```
├── index.html                # Entry point
├── package.json             # Dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── main.tsx                # React entry point
├── App.tsx                 # Main app component
├── Layout.tsx              # Navigation & footer layout
├── index.css               # Global styles
├── HomePage.tsx            # Home page
├── AboutPage.tsx           # About OSED page
├── CoachingPage.tsx        # Coaching services page
├── TestimonialsPage.tsx    # Client testimonials page
└── ContactPage.tsx         # Contact & application page
```

## Setup & Installation

### Option 1: Quick Start (Recommended) ⭐
Simply **double-click `run.bat`** in the project folder. It will:
- Install all dependencies
- Install React Router
- Start the dev server at http://localhost:3000

### Option 2: Manual Setup
```bash
cd "c:\Users\domin\OSED Pt 2"
npm install
npm install react-router-dom @types/react-router-dom
npm run dev
```

Visit `http://localhost:3000` to see your site live!

### Quick Commands
- **Run dev server:** `run.bat`
- **Build for production:** `build.bat`
- **Run tests:** `test.bat`

For details, see `SCRIPTS_README.md`

## Pages & Features

### Pages
- **Home** - Hero with logo, problem statement, philosophy, founder intro, testimonials preview
- **About** - OSED mission, founder story, core values, coaching philosophy
- **Coaching** - Services, how it works, expectations, FAQ
- **Testimonials** - Client stories, transformations, results
- **Contact** - Application form, email contact, social links

### Key Features
- ✓ OSED logo integrated in header and footer
- ✓ Brand color system (Red #C41E3A for CTAs, Black for primary, Gray for secondary)
- ✓ Responsive mobile-first design
- ✓ Clean, modern aesthetic aligned with brand
- ✓ Application form with validation
- ✓ Email newsletter subscription
- ✓ Social media integration points
- ✓ SEO-optimized structure
- ✓ Fast load times with Vite

## Design System

### Colors
- **Primary:** Black (#000000)
- **Neutral:** Grays (50-900 scale)
- **Accent:** White (#FFFFFF)

### Components
- `.btn-primary` - Primary action buttons (black bg, white text)
- `.btn-secondary` - Secondary buttons (gray bg)
- `.container-custom` - Max-width container with padding
- `.section-padding` - Vertical section spacing

### Typography
- Clean, professional sans-serif
- Bold headings
- Clear visual hierarchy

## Next Steps & Roadmap

### Phase 4: Backend & Advanced Features
- [ ] API routes for form submissions
- [ ] Email notification system
- [ ] Database setup (Supabase/PostgreSQL)
- [ ] Client portal scaffolding
- [ ] Payment processing (Stripe)

### Phase 5: Deployment
- [ ] Test all forms and integrations
- [ ] Performance optimization
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] SEO verification

### Future Enhancements
- Email capture integration (Mailchimp/SendGrid)
- Calendly scheduling widget
- Blog/education content section
- Transformation challenges
- Apparel store
- Digital programs
- Community forum

## Configuration

### Environment Variables
Create `.env.local` for environment-specific settings:
```
VITE_API_URL=http://localhost:3000
VITE_CONTACT_EMAIL=dominic@osed.com
```

### Tailwind CSS
Customize in `tailwind.config.js`:
- Colors
- Typography
- Spacing
- Breakpoints

## Performance Notes

- Vite provides fast HMR (Hot Module Replacement) for development
- Tailwind CSS purges unused styles in production
- Lucide icons are tree-shakeable (only used icons are bundled)
- Images should be optimized before deployment

## Brand Voice & Standards

The website should reflect:
- **Discipline** - Strong, consistent brand presence
- **Authenticity** - Real stories, real results, no hype
- **Clarity** - Clear messaging, easy navigation
- **Sustainability** - Focus on long-term transformation

Avoid:
- Flashy design or extreme imagery
- Fake luxury aesthetics
- Unrealistic promises
- Information overload

## Support

For questions or issues, contact Dominic: dominic@osed.com

---

**Built with discipline. Powered by consistency. One step every day.**
