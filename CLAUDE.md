# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Nathan Huey's personal website built with Next.js 13 (App Router), TypeScript, Tailwind CSS, and DaisyUI. The site is containerized with Docker and features a single-page application with smooth scrolling navigation between sections.

## Development Commands

All commands should be run from the `next/` directory:

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

The development server runs on http://localhost:3000

## Architecture

### Project Structure
- **Root level**: Contains Docker Compose configuration and main README
- **next/**: Main Next.js application directory
  - **src/app/**: App Router structure with layout and page components
  - **src/app/components/**: Reusable React components (navbar, landing, about, projects, footer, arrow)
  - **src/_data/**: JSON data files (experience.json contains project/work experience)
  - **public/**: Static assets (images, SVG icons)

### Key Components
- **page.tsx**: Main page component that orchestrates all sections with refs for smooth scrolling
- **layout.tsx**: Root layout with Inter font and metadata
- **Navbar**: Navigation with smooth scrolling to About and Projects sections (hidden on mobile)
- **Landing**: Hero section
- **About**: About section
- **Projects**: Projects section that likely uses experience.json data
- **Footer**: Site footer
- **Arrow**: Navigation element for smooth scrolling

### Styling and UI
- **Tailwind CSS**: Primary styling framework
- **DaisyUI**: Component library using "emerald" theme
- **Framer Motion**: Animation library
- **Custom spacing**: Extended spacing utilities (112: '28rem', 128: '32rem')

### Data Management
- **experience.json**: Contains structured data for work experience and projects with fields:
  - name, role, date, description, link, tools array

## Docker Setup

The application includes Docker configuration with:
- `docker-compose.yml` in root
- `Dockerfile` in next/ directory

## Development Notes

- Uses Next.js 13 App Router (not Pages Router)
- Client-side components use 'use client' directive
- Smooth scrolling navigation implemented with useRef and scrollIntoView
- TypeScript configuration with strict settings
- ESLint configured with Next.js and Prettier integration
- No testing framework currently configured