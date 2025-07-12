# TechGriffo Terminal Portfolio - Deployment Guide

## Quick Deployment to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Updated portfolio for TechGriffo"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login and Deploy:**
   ```bash
   vercel login
   vercel --prod
   ```

## Mobile Optimizations Included

✅ **Responsive Design:**
- Mobile-first CSS with breakpoints at 768px, 480px
- Touch-friendly button sizes (minimum 44px)
- Optimized terminal height for mobile keyboards

✅ **Mobile Features:**
- Automatic mobile detection
- Keyboard-aware viewport handling
- Touch event optimizations
- Horizontal scroll for code blocks

✅ **Cross-Device Testing:**
- Works on phones, tablets, and desktops
- Landscape and portrait orientations
- Different screen sizes and pixel densities

## Files Modified for Mobile:
- `styles.css` - Added comprehensive mobile CSS
- `main.js` - Added mobile detection and keyboard handling
- `index.html` - Optimized viewport settings

## Live Testing:
Test your site on:
- Mobile Chrome/Safari
- Desktop browsers
- Tablet devices
- Different orientations

Your TechGriffo portfolio is now fully mobile-responsive! 🚀
