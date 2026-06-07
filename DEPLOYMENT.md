# Performance Optimization & Deployment Guide

## 🚀 Performance Optimization

### Before Deployment

1. **Build Optimization**
   ```bash
   npm run build
   # Check bundle size
   npm run build -- --analyze
   ```

2. **Image Optimization**
   - Use Next.js Image component
   - Convert to WebP format
   - Compress images < 100KB per image

3. **Code Splitting**
   - Dynamic imports for heavy components
   - Tree-shaking unused code

### Lighthouse Optimization

Target scores: 90+

1. **Performance**
   - Minimize JavaScript
   - Optimize images
   - Use lazy loading
   - Enable compression

2. **Accessibility**
   - Semantic HTML ✅ Already done
   - ARIA labels ✅ Already done
   - Color contrast ✅ Already done
   - Keyboard navigation ✅ Already done

3. **Best Practices**
   - Use HTTPS
   - No console errors
   - Modern browser APIs

4. **SEO**
   - Meta tags ✅
   - Sitemap
   - robots.txt

## 🌐 Deployment

### Vercel (Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# With environment
vercel --env NEXT_PUBLIC_API_URL=https://api.example.com
```

**Vercel Dashboard Setup:**
1. Connect GitHub
2. Select repository
3. Auto-deploys on push to main

### Netlify

```bash
# Build locally
npm run build

# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

### AWS Amplify

```bash
# Install AWS CLI
npm i -g @aws-amplify/cli

# Configure
amplify init

# Deploy
amplify publish
```

### Docker

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Traditional Hosting (Hostinger, Bluehost, etc.)

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload .next folder**
   - Use FTP/SFTP
   - Upload to public_html or web root

3. **Configure Node.js**
   - Select Node.js 18+
   - Set startup file to `npm start`
   - Configure .env file on server

4. **Setup domain**
   - Point DNS to hosting provider
   - Configure SSL certificate
   - Setup redirects (http → https)

## 🔧 Environment Variables

Create `.env.production`:

```env
# Public variables (exposed to browser)
NEXT_PUBLIC_SITE_NAME=Abhinaya's Portfolio
NEXT_PUBLIC_SITE_URL=https://abhinaya.dev

# Server-side only
NEXT_API_SECRET=your-secret-key
DATABASE_URL=your-db-url
```

## 🔐 Security Checklist

- [ ] Enable HTTPS
- [ ] Set security headers
- [ ] Configure CORS
- [ ] Validate form inputs
- [ ] Sanitize user inputs
- [ ] Use environment variables for secrets
- [ ] Keep dependencies updated
- [ ] Setup monitoring/logging

## 📊 Monitoring & Analytics

### Google Analytics
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Error Tracking (Sentry)
```bash
npm install @sentry/nextjs
```

## 🚀 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 📈 Post-Launch

1. **Monitor performance**
   - Check Lighthouse scores
   - Monitor Core Web Vitals
   - Set up alerts for errors

2. **Update content regularly**
   - Add new projects
   - Update achievements
   - Keep experience current

3. **Security updates**
   - Keep dependencies updated
   - Monitor for vulnerabilities
   - Run security audits

4. **SEO monitoring**
   - Monitor search rankings
   - Submit sitemap to search engines
   - Check for crawl errors

---

**You're ready to deploy!** 🚀
