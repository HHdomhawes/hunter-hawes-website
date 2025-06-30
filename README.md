# Hunter, Hawes & Co. Website

Modern, responsive website for Hunter, Hawes & Co. - M&A Advisory for the Creative Economy.

## About

Hunter, Hawes & Co. is a boutique M&A advisory firm specializing in creative agencies, design studios, and professional services companies with revenues under £20 million. Based in London, we serve the creative economy with a contemporary, non-corporate approach.

## Technology Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a Service for forms and data
- **Vercel** - Deployment and hosting platform

## Features

- 🎨 Contemporary design reflecting creative economy culture
- 📱 Fully responsive across all devices
- ⚡ Fast loading with optimized performance
- 📧 Contact form with Supabase integration
- 🔍 SEO optimized with proper meta tags
- 🚀 Ready for Vercel deployment

## Brand Identity

- **Colors**: LEGO Red (#E31E24), Black (#000000), White (#FFFFFF)
- **Typography**: Inter font family
- **Aesthetic**: "Black t-shirts, chinos, and leather trainers" - professional but contemporary
- **Positioning**: M&A advisory for the creative economy, by people who are part of it

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone this repository
```bash
git clone [your-repo-url]
cd hunter-hawes-website
```

2. Install dependencies
```bash
pnpm install
```

3. Set up environment variables
```bash
cp .env.example .env
```
Add your Supabase credentials to `.env`

4. Start development server
```bash
pnpm dev
```

## Environment Variables

Create a `.env` file with:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Build

```bash
pnpm build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Logo.jsx        # Logo component
│   └── ContactForm.jsx # Contact form with Supabase
├── assets/             # Images and static assets
├── App.jsx             # Main application component
├── App.css             # Global styles and Tailwind
└── main.jsx            # Application entry point
```

## Brand Assets

Logo variations included:
- Primary logo (HUNTER / HAWES & CO.)
- Horizontal lockup
- Stacked version
- Favicon/icon

## Contact

For questions about this website or M&A advisory services:

- Email: hello@hunterhawes.co.uk
- Website: [hunterhawes.co.uk](https://hunterhawes.co.uk)
- Location: London, UK

## License

© 2024 Hunter, Hawes & Co. All rights reserved.

