# Homebiro Landing Page - Deployment Guide

## Quick Start (Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Production Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment Options

### 1. Vercel (Recommended - Easiest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and deploy
5. Your site will be live in minutes!

**Benefits:**
- Automatic deployments on git push
- Free SSL certificate
- Global CDN
- Zero configuration needed

### 2. Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git" → Select your repo
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

### 3. Traditional Hosting (cPanel, Shared Hosting)

For traditional hosting with Node.js support:

```bash
# On your local machine
npm run build

# Upload these folders to your server:
# - .next
# - public
# - node_modules (or run npm install on server)
# - package.json

# On server, run:
npm install --production
npm start
```

### 4. Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t homebiro-landing .
docker run -p 3000:3000 homebiro-landing
```

## Environment Variables (Optional)

Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_API_URL=https://api.homebiro.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## Performance Optimization

The site is already optimized with:
- ✅ Static generation for fast loading
- ✅ Code splitting for smaller bundles
- ✅ Image optimization with Next.js
- ✅ CSS animations (better performance than JS)
- ✅ Lazy loading components

## Custom Domain Setup

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as shown
4. Wait for SSL certificate (automatic)

### Other Hosts:
1. Point domain's A record to server IP
2. Set up SSL certificate (Let's Encrypt recommended)
3. Configure web server (nginx/Apache) to proxy to Next.js

## Troubleshooting

### Build fails:
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port already in use:
```bash
# Use different port
PORT=3001 npm run dev
```

### Fonts not loading:
- Fonts are loaded from Google Fonts CDN
- Check internet connection
- Verify no firewall blocking fonts.googleapis.com

## Performance Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics (automatic on Vercel)
- Sentry for error tracking

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Email: support@homebiro.com

## Security Checklist

- [ ] Keep dependencies updated (`npm audit`)
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS (automatic on Vercel/Netlify)
- [ ] Add security headers (next.config.js)
- [ ] Implement rate limiting for forms

## Updates & Maintenance

```bash
# Update all dependencies
npm update

# Check for outdated packages
npm outdated

# Security audit
npm audit fix
```

---

**Need Help?**
- Documentation: [Next.js Docs](https://nextjs.org/docs)
- Community: [Next.js Discord](https://discord.gg/nextjs)
- Email: support@homebiro.com
