# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website built with React 19, TypeScript, and Tailwind CSS 4. It showcases creative technology projects, professional experience, and contact information for Mohammed Alkhalifa, a Creative Technologist & Front-End Developer.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

The development server runs on http://localhost:3000

## Architecture & Code Structure

### Single-Page Application Pattern

This portfolio uses a **single-page component architecture** where the entire site is contained in `app/page.tsx` (~600 lines). This design choice prioritizes:
- Easy content updates via data constants at the top of the file
- No routing complexity for a simple portfolio
- Fast initial load with no client-side navigation

### Data-Driven Content Model

All content is defined in constant objects at the top of `app/page.tsx`:

- `HERO` - Name, title, tagline, and social links
- `ABOUT` - Biography paragraphs and image gallery
- `ABOUT_IMAGES` - Image tiles with labels
- `TECH_STACK` - Technology badges
- `PROJECTS` - Featured work with support for video/image media types, tags, and a `wide` property for 2-column spans
- `CONTACT_CARDS` - Contact methods with icons and colors

**When adding new projects or content:** Modify these constants rather than the component JSX. The presentation layer automatically maps over these data structures.

### Component Organization

The file is organized into four clearly marked sections:

1. **Data Config** - All editable content constants
2. **Presentational Components** - Small reusable UI pieces (`SectionTitle`, `TechBadge`)
3. **Section Components** - Major page sections (`Header`, `HeroSection`, `AboutSection`, `ProjectsSection`, `ContactSection`)
4. **Main Component** - The `Home` export that assembles all sections

### Styling System

- **Tailwind CSS 4** with custom theme configuration in `globals.css`
- Uses CSS variables for colors: `--background`, `--foreground`
- **Color palette**: sky, purple, pink, indigo, emerald, teal (used consistently across tags, borders, and accents)
- **Design tokens**: Gradient backgrounds, border hover effects, and shadow styles are applied per-project using `tagColor` property
- Dark theme by default with subtle gradient accents and glassmorphism effects

### TypeScript Configuration

- Path alias: `@/*` maps to project root
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler (Next.js 15 standard)

### Static Assets

- Resume PDFs stored in `/public` directory
- Project images in `/public/images/`
- SVG icons in `/public` root

## Key Implementation Details

**Project Card System**: Each project in the `PROJECTS` array can be type `"video"` or `"image"`. Video projects embed YouTube iframes, image projects display static images. The `wide: true` property makes a project span 2 columns on desktop layouts.

**Color-Coded Tags**: Projects use a `tagColor` property (sky/purple/pink/indigo/emerald/teal) that automatically applies coordinated border-hover, tag background, and link colors through conditional class application.

**Responsive Grid**: Projects use `md:grid-cols-2` with individual cards able to span both columns via the `wide` property for featured content.

## Making Changes

- **Adding a project**: Append to the `PROJECTS` array with all required fields (id, title, tag, tagColor, type, description, linkLabel, linkUrl) plus either `videoUrl` or `imageUrl`
- **Updating bio/skills**: Edit `ABOUT` and `TECH_STACK` constants
- **Changing colors**: Modify Tailwind classes and ensure consistency with the existing color palette
- **Adding new sections**: Follow the existing pattern of data constant → section component → integration in `Home` component
