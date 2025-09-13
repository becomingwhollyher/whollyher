# WhollyHer - Next.js Application

A modern Next.js application for WhollyHer, a community dedicated to empowering women through healing, purpose, and faith.

## Features

- 🚀 **Next.js 14** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🖼️ **Next.js Image** optimization
- 📱 **Responsive Design** 
- ♿ **Accessibility** focused
- 🌙 **Dark Mode** support
- ⚡ **Performance** optimized
- 🔍 **SEO** optimized

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd whollyher-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── about/             # About page
│   ├── community/         # Community page
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error UI
│   └── not-found.tsx      # 404 page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroBanner.tsx     # Hero section
│   ├── AboutSection.tsx   # About section
│   ├── CorePillars.tsx    # Core pillars section
│   └── TeamSection.tsx    # Team section
└── data/                  # Data and types
    └── index.ts           # Team members and pillars data
```

## Key Components

### Header
- Responsive navigation
- Mobile menu
- Dark mode support
- Accessible design

### HeroBanner
- Compelling hero section
- Call-to-action buttons
- Responsive typography

### CorePillars
- Interactive cards
- Image optimization
- Grid layout

### TeamSection
- Dynamic team member display
- Professional profiles
- Responsive grid

### Footer
- Comprehensive site links
- Social media integration
- Newsletter signup
- Legal pages

## Styling

The project uses Tailwind CSS with:
- Custom color palette (Purple theme)
- Component-based utilities
- Dark mode support
- Responsive design system

## Performance

- Next.js Image optimization
- Code splitting
- Server-side rendering
- Static generation where possible
- Optimized fonts (Inter)

## SEO

- Comprehensive metadata
- Open Graph tags
- Twitter cards
- Structured data ready
- Semantic HTML

## Deployment

The app is ready for deployment on:
- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

### Deploy to Vercel

```bash
npm run build
npx vercel --prod
```

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React 18** - UI library
- **ESLint** - Code linting

## License

MIT License - see LICENSE file for details.

## Support

For support, please contact the WhollyHer team or create an issue in the repository.
