# 🚀 Next.js 15 Portfolio - Installation & Setup Guide

## ✨ Project Overview

Your modern portfolio has been completely rebuilt with:
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **GSAP 3.12** for scroll animations
- **Lenis 1.0** for smooth scrolling
- **Lucide React** for icons

All your existing portfolio content has been migrated!

## 📁 Project Structure Created

```
nextjs-portfolio/
├── app/
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout (metadata, fonts)
│   └── page.tsx                 # Home page
│
├── components/
│   ├── Navbar.tsx               # Navigation with mobile menu
│   ├── Hero.tsx                 # Hero section with animations
│   ├── About.tsx                # About section with stats
│   ├── Skills.tsx               # Skills grid
│   ├── Projects.tsx             # Projects showcase
│   ├── Experience.tsx           # Experience timeline
│   ├── Achievements.tsx         # Achievements cards
│   ├── Contact.tsx              # Contact form
│   ├── Footer.tsx               # Footer with scroll-to-top
│   ├── SmoothScroll.tsx        # Lenis smooth scroll wrapper
│   └── AnimationProvider.tsx    # GSAP setup
│
├── lib/
│   ├── data.ts                  # All portfolio content
│   └── utils.ts                 # Utility functions
│
├── public/                      # Static assets (add images here)
│
├── Configuration Files
│   ├── package.json             # Dependencies
│   ├── tsconfig.json            # TypeScript config
│   ├── next.config.js           # Next.js config
│   ├── tailwind.config.js       # Tailwind theme
│   ├── postcss.config.js        # PostCSS plugins
│   └── .eslintrc.json           # ESLint rules
│
├── Documentation
│   ├── README.md                # Full documentation
│   ├── DEPLOYMENT.md            # Deployment guide
│   ├── COMMANDS.md              # Available commands
│   └── SETUP.md                 # This file
│
└── .gitignore                   # Git ignore rules
```

## 🎯 Getting Started

### Step 1: Install Dependencies

```bash
# Navigate to project directory
cd c:\Users\abhin\ABHINAYA portfolio\nextjs-portfolio

# Install dependencies
npm install
```

**This installs:**
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP & ScrollTrigger
- Lenis Smooth Scroll
- Lucide Icons
- And more...

### Step 2: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

### Step 3: Verify Everything Works

- [ ] Check Hero section loads
- [ ] Verify navigation works
- [ ] Test smooth scrolling
- [ ] Check responsive design on mobile
- [ ] Test animations on scroll

## 📝 Customization Guide

### 1. Update Personal Information

**File:** `lib/data.ts`

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    email: 'your-email@example.com',
    phone: '+91 XXXXX XXXXX',
    location: 'Your Location',
    description: 'Your description',
  },
  // ... update other sections
};
```

### 2. Add Your Projects

**In `lib/data.ts`** - Update the `projects` array:

```typescript
projects: [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description',
    technologies: ['React', 'TypeScript'],
    emoji: '💻',
    github: 'https://github.com/...',
    live: 'https://project.com',
    highlights: ['Feature 1', 'Feature 2'],
  },
  // Add more projects
]
```

### 3. Update Skills

**In `lib/data.ts`** - Update the `skills` object:

```typescript
skills: {
  programming: ['JavaScript', 'TypeScript', 'React'],
  tools: ['VS Code', 'Git', 'Next.js'],
  concepts: ['DSA', 'OOP', 'Web Dev'],
  soft: ['Communication', 'Teamwork'],
}
```

### 4. Update Experience

**In `lib/data.ts`** - Modify the `experience` array:

```typescript
experience: [
  {
    id: 1,
    company: 'Company Name',
    role: 'Your Role',
    date: 'Start – End',
    type: 'Remote',
    description: 'Description',
    details: ['Achievement 1', 'Achievement 2'],
    icon: '🚀',
  },
  // Add more experiences
]
```

### 5. Change Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  accent: {
    pink: '#your-color',      // Change primary color
    'pink-light': '#lighter',
    purple: '#your-purple',
  },
}
```

Popular color schemes:
- **Pink (current)**: `#fa5a9a`, `#f26fa4`, `#ca64e3`
- **Blue**: `#00d4ff`, `#0099cc`, `#66b3ff`
- **Green**: `#00ff88`, `#00cc66`, `#88ff00`
- **Orange**: `#ff6b35`, `#ff8c42`, `#ff4500`

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Production
npm run build           # Build for production
npm start              # Start production server

# Quality checks
npm run type-check     # Check TypeScript types
npm run lint           # Run ESLint
```

## 🎨 Understanding the Components

### Hero Component (`components/Hero.tsx`)
- Main landing section
- Framer Motion animations
- CTA buttons
- Floating background elements

### About Component (`components/About.tsx`)
- Personal introduction
- Stats cards with hover effects
- Scroll-triggered animations

### Skills Component (`components/Skills.tsx`)
- Grid layout for skill categories
- Interactive skill tags
- Hover animations

### Projects Component (`components/Projects.tsx`)
- Project showcase cards
- Technology badges
- GitHub and Live Demo links

### Experience Component (`components/Experience.tsx`)
- Timeline visualization
- Experience cards
- Details list

### Achievements Component (`components/Achievements.tsx`)
- Achievement cards
- Icons
- Descriptions

### Contact Component (`components/Contact.tsx`)
- Contact form
- Contact links
- Social media integration

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components use Tailwind's responsive utilities (`md:`, `lg:`, etc.)

## 🎬 Animation Libraries

### Framer Motion
Used for component-level animations:
```typescript
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  whileHover={{ scale: 1.05 }}
>
  Content
</motion.div>
```

### GSAP ScrollTrigger
For scroll-based animations (setup in `AnimationProvider.tsx`)

### Lenis
For smooth scroll experience (setup in `SmoothScroll.tsx`)

## 🔍 SEO Features

### Meta Tags
Automatically set in `app/layout.tsx`:
- Title & description
- Open Graph tags
- Twitter card
- Viewport settings

### To add to:
1. Update metadata in `layout.tsx`
2. Add structured data
3. Create `sitemap.xml`
4. Create `robots.txt`

## 🚀 Deployment

### Quick Deploy to Vercel

```bash
npm i -g vercel
vercel
```

### Other Options
- **Netlify**: Drag & drop `.next` folder
- **GitHub Pages**: Configure workflow
- **Traditional Hosting**: See DEPLOYMENT.md

See `DEPLOYMENT.md` for detailed instructions.

## 📊 Performance Metrics

Target metrics (after optimization):
- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Bundle Size**: < 100KB

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -r node_modules
npm install
```

### TypeScript errors
```bash
# Check types
npm run type-check

# Force rebuild
rm -r .next
npm run build
```

### Animations not showing
- Check if JavaScript is enabled
- Verify Framer Motion is imported
- Check console for errors

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://greensock.com/docs/)
- [Lenis Docs](https://lenis.darkroom.engineering/)
- [Lucide Icons](https://lucide.dev/)

## 🎯 Next Steps

1. **Customize Content**
   - Update `lib/data.ts` with your information
   - Add projects and achievements
   - Update social links

2. **Test Locally**
   - Run `npm run dev`
   - Check all sections
   - Test on mobile

3. **Optimize**
   - Add your profile image
   - Optimize images
   - Run Lighthouse audit

4. **Deploy**
   - Choose hosting platform
   - Deploy following DEPLOYMENT.md
   - Monitor performance

## 💡 Pro Tips

1. **Use TypeScript**
   - Type-safe component props
   - Better IDE autocompletion
   - Catch errors early

2. **Tailwind Utilities**
   - Responsive: `md:`, `lg:`
   - Hover: `hover:`, `group-hover:`
   - States: `focus:`, `active:`

3. **Component Organization**
   - Keep components small & focused
   - Use composition patterns
   - Extract complex logic

4. **Performance**
   - Use Next.js Image component
   - Lazy load heavy components
   - Optimize bundle size

5. **Deployment**
   - Use Vercel for best Next.js experience
   - Enable automatic deployments
   - Monitor with Web Vitals

## 🤝 Support

If you need help:
1. Check `README.md` for detailed docs
2. Review component comments
3. Check framework documentation
4. Search online for errors

---

## ✅ Verification Checklist

After setup, verify:
- [ ] `npm install` completes without errors
- [ ] `npm run dev` starts server on localhost:3000
- [ ] All sections render correctly
- [ ] Navbar navigation works
- [ ] Smooth scrolling works
- [ ] Animations play on scroll
- [ ] Responsive on mobile
- [ ] No console errors

## 🎉 You're Ready!

Your Next.js 15 portfolio is now ready for customization and deployment.

**Happy building!** 🚀

---

**Created with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**
