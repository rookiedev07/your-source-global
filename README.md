# Your Source Global (YSG)

Enterprise-grade BPO, staffing, and operational outsourcing platform designed for high-growth enterprises and global corporations.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animation Engine**: GSAP & GSAP ScrollTrigger
- **Icons**: Lucide React
- **Form Management & Validation**: React Hook Form + Zod

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Local Preview of Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/               Static assets & brand graphics
├── src/
│   ├── assets/           Local styling assets
│   ├── components/
│   │   ├── cta/          Call-to-action banners
│   │   ├── forms/        Lead capture & contact forms
│   │   ├── layout/       Header, navigation & footer
│   │   └── ui/           Atomic UI design system components
│   ├── content/          Structured copy and data models
│   ├── schemas/          Zod validation schemas
│   ├── sections/         Full-page section layouts
│   ├── App.jsx           Root application component
│   ├── index.css         Tailwind CSS root & font imports
│   └── main.jsx          Application entry point
├── tailwind.config.js    Tailwind color palette & typography tokens
├── vite.config.js        Vite configuration & chunking strategy
└── package.json          Project dependencies & build scripts
```
