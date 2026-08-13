# Next.js 15 Portfolio with TypeScript & Tailwind CSS

A modern, production-ready portfolio website built with cutting-edge technologies.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP 3.12
- **Smooth Scroll**: Lenis 1.0
- **Icons**: Lucide React
- **Performance**: Optimized with Next.js built-in features

## Features

### Design & UX
- Premium dark theme with glassmorphism
- Fully responsive design (mobile-first)
- Smooth animations with Framer Motion
- GSAP ScrollTrigger animations
- Lenis smooth scrolling
- Lucide icons integration

### Performance
- Image optimization
- Code splitting & lazy loading
- Optimized bundle size
- Fast page loads (<1s)
- LCP, CLS, FID optimized

### SEO
- Semantic HTML
- Meta tags & Open Graph
- Mobile-friendly viewport
- Structured data ready
- XML sitemap support

### Accessibility
- WCAG 2.1 compliant
- Keyboard navigation
- Focus management
- Screen reader support
- Reduced motion support

## Project Structure

```
nextjs-portfolio/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
│
├── components/
│   ├── Navbar.tsx              # Navigation component
│   ├── Hero.tsx                # Hero section
│   ├── About.tsx               # About section
│   ├── Skills.tsx              # Skills section
│   ├── Projects.tsx            # Projects showcase
│   ├── Experience.tsx          # Experience timeline
│   ├── Achievements.tsx        # Achievements section
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Footer component
│   ├── SmoothScroll.tsx        # Lenis integration
│   └── AnimationProvider.tsx   # GSAP setup
│
├── lib/
│   ├── data.ts                 # Portfolio content
│   └── utils.ts                # Utility functions
│
├── public/                     # Static assets
├── styles/                     # Additional styles (optional)
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── next.config.js              # Next.js configuration
├── .eslintrc.json              # ESLint configuration
└── README.md                   # Documentation
```

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**
```bash
cd nextjs-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## Development

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## Customization

### Update Personal Information

Edit `lib/data.ts`:

```typescript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    email: 'your-email@example.com',
    // ... more fields
  },
  // ... other sections
};
```

### Modify Color Scheme

Edit `tailwind.config.js`:

```javascript
colors: {
  accent: {
    pink: '#your-color',
    'pink-light': '#your-color',
    purple: '#your-color',
  },
  // ... more colors
}
```

### Add New Section

1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add to layout

Example:
```typescript
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <AnimationProvider>
      <SmoothScroll>
        <Navbar />
        <Hero />
        <Blog />  {/* New section */}
        <Footer />
      </SmoothScroll>
    </AnimationProvider>
  );
}
```

### Update Projects

Edit the `projects` array in `lib/data.ts`:

```typescript
projects: [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description here',
    technologies: ['Tech1', 'Tech2'],
    emoji: '💻',
    github: 'https://github.com/...',
    live: 'https://...',
    highlights: ['Feature 1', 'Feature 2'],
  },
  // ... more projects
]
```

## Styling

The project uses:
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Modules**: For component-scoped styles
- **Global CSS**: In `app/globals.css`

### Custom Utilities

Available custom Tailwind classes:
- `.section-title` - Section heading with underline
- `.btn` - Button base styles
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.card` - Card component
- `.glass` - Glassmorphism effect
- `.gradient-text` - Gradient text effect

## Animations

### Framer Motion
Used for component-level animations with:
- `motion.div`, `motion.h1`, etc.
- `variants` for animation configs
- `whileHover`, `whileInView`, `animate` props

### GSAP ScrollTrigger
Set up in `AnimationProvider.tsx` for:
- Scroll-triggered animations
- Timeline animations
- Complex sequences

### Lenis Smooth Scroll
Configured in `SmoothScroll.tsx` with:
- 1.2s duration
- Custom easing function
- Smooth momentum scrolling

## Deployment

### Vercel (Recommended)
```bash
# One-click deployment
npm i -g vercel
vercel
```

### Netlify
```bash
# Build
npm run build

# Deploy dist or .next folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables

Create `.env.local`:
```env
# Add any environment variables needed
# NEXT_PUBLIC_* are exposed to browser
```

## Performance Metrics

Target metrics:
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Bundle Size**: < 100KB

## Security

- Next.js security headers
- Content Security Policy
- No external fonts (system fonts)
- Secure image optimization
- CSRF protection ready

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Contributing

Feel free to fork and customize this portfolio for your needs!

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check existing documentation
2. Review component comments
3. Check Next.js docs: https://nextjs.org/docs
4. Check Tailwind docs: https://tailwindcss.com/docs

## Future Enhancements

- [ ] Blog section with MDX
- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] CMS integration
- [ ] Backend API routes
- [ ] Email notifications
- [ ] Analytics integration
- [ ] Performance monitoring

---

**Built with using Next.js 15 & TypeScript**
**Abhinaya Reddy**

Happy coding! 🚀
