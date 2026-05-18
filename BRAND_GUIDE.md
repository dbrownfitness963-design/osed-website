# OSED Brand Guide

## Logo Design

The OSED logo features:
- **Upward Arrow** - Represents growth, progress, and upward momentum
- **Diagonal Stripes** - Gray (#B0B0B0) showing consistent effort and discipline
- **Red Accent** (#C41E3A) - Highlights the growth and success, represents energy and passion
- **Typography** - Clean, bold lettering with "ONE STEP EVERYDAY" tagline

### Color Palette

**Primary Colors:**
- **Black** (#1a1a1a) - Main text, strong authority, discipline
- **White** (#FFFFFF) - Clean space, clarity
- **OSED Red** (#C41E3A) - Call-to-action, highlights, growth accent
- **OSED Gray** (#B0B0B0) - Secondary element, stripe pattern

**Usage:**
- Black: Text, backgrounds, primary buttons
- White: Contrast, space, clarity
- Red: CTAs ("Apply for Coaching"), highlights, important calls-to-action
- Gray: Logos on light backgrounds, secondary elements, borders

---

## Logo Usage

### Header/Navigation
- Small logo (10-12px) with text "OSED" and "ONE STEP" below
- Used to brand top navigation
- Hover state: slight opacity change

### Homepage Hero
- Large logo (96-128px) next to brand messaging
- Establishes strong visual branding immediately
- Color: Black on dark background

### Footer
- Small logo (32px) with "OSED" brand name
- Color: Gray for subtle branding in footer context

### Social Media
- Can use full logo or just arrow icon
- Color: Black or White depending on background

---

## CTA Button Styling

### Primary CTA - Red
- Background: OSED Red (#C41E3A)
- Text: White
- Hover: Darker red (#B01430)
- Used for: "Apply for Coaching", "Apply Now", main conversions
- Location: Hero section, bottom of each page

### Secondary CTA - Black
- Background: Black (#1a1a1a)
- Text: White
- Hover: Dark gray (#2D2D2D)
- Used for: Navigation buttons, secondary actions

### Tertiary CTA - Gray
- Background: Light gray (#E5E7EB)
- Text: Black
- Hover: Medium gray (#D1D5DB)
- Used for: "Learn More", secondary navigation

---

## Implementation

### In React Components

```jsx
// Using inline SVG logo
<svg className="w-10 h-10" viewBox="0 0 100 100" fill="none">
  <g>
    <path d="..." stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    <path d="..." stroke="#C41E3A" strokeWidth="5" />
  </g>
</svg>

// Using red CTA button
<button className="btn-primary-red">Apply for Coaching</button>
```

### CSS Classes Available

```css
.btn-primary        /* Black button */
.btn-primary-red    /* Red CTA button */
.btn-secondary      /* Gray button */
```

---

## Brand Voice

The logo represents:
- **Discipline** - Sharp, clean lines and design
- **Progress** - Upward arrow showing growth
- **Consistency** - Repeated diagonal pattern
- **Energy** - Red accent showing passion and drive
- **Professionalism** - Modern, trustworthy design

---

## Logo Files

- **Digital**: SVG (scalable, all sizes)
- **Color**: Black, White, Red accent versions available
- **Sizes**: Works from 16px (favicon) to 1000px+ (billboard)

---

## Brand Accent Color

The OSED Red (#C41E3A) is used sparingly but prominently for:
- Main call-to-action buttons
- Hover states on interactive elements
- Logo accent (arrow highlight)
- Special highlights or important information
- Hero section accents

This creates visual hierarchy and draws attention to conversion actions while maintaining a professional, disciplined aesthetic.

---

## Consistency Guidelines

✅ **Do:**
- Use red for primary CTAs ("Apply for Coaching")
- Use black for navigation and secondary actions
- Use gray for tertiary elements and borders
- Use white for contrast and clarity
- Maintain consistent button sizing and spacing

❌ **Don't:**
- Use red for non-actionable text
- Mix red and black CTAs on same section
- Use red background with small text (contrast issue)
- Deviate from the logo's clean, minimal design
- Add effects (shadows, gradients) to the logo

---

## Website Implementation

### Homepage
- Large logo in hero
- Red "Apply for Coaching" CTA buttons
- Black navigation and secondary buttons

### All Pages
- Logo in header navigation
- Consistent red CTA at bottom
- Logo in footer with gray treatment

### Contact/Application
- Red submit button
- Logo in header
- Red accent in form sections

---

**Brand Philosophy**: One small red accent against clean black, white, and gray represents the OSED philosophy—one step, everyday, building momentum over time.
