# BaseCamp Next.js Application

This is a Next.js application for the BaseCamp outdoor resilience coaching program at Bemidji State University.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
basecamp-nextjs/
├── pages/
│   ├── _app.js          # App component wrapper
│   └── index.js         # Main landing page
├── styles/
│   ├── globals.css      # Global styles
│   └── Home.module.css  # Component-specific styles
├── public/
│   └── media/
│       └── mountain-landscape.png  # Mountain image
├── package.json
├── next.config.js
└── README.md
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Accessibility**: 508 compliant with ARIA labels and keyboard navigation
- **Performance**: Next.js Image optimization and lazy loading
- **SEO**: Proper meta tags and semantic HTML
- **Animations**: Intersection Observer for scroll-triggered animations
- **Modern React**: Hooks, functional components, and CSS modules

## Deployment

### Vercel (Recommended)
```bash
npm run build
```
Deploy to Vercel for automatic optimization.

### Static Export
Uncomment the static export configuration in `next.config.js` for static hosting:
```bash
npm run build
npm run export
```

## Customization

1. **Images**: Replace `/public/media/mountain-landscape.png` with your image
2. **Colors**: Modify CSS custom properties in `Home.module.css`
3. **Content**: Update text content in `pages/index.js`
4. **Contact**: Update contact information in the contact section

## Accessibility Features

- Skip to main content link
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Screen reader announcements
- High contrast mode support
- Reduced motion support