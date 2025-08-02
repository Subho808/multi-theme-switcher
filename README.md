# Multi-Theme Switcher App

A React-based web application with a theme switcher supporting three distinct themes: Minimalist (Theme 1), Dark Sidebar (Theme 2), and Colorful Grid (Theme 3). Built with Vite, TypeScript, Tailwind CSS, and Framer Motion for animations.

## Features
- Fixed header with app logo, theme switcher dropdown, and sidebar toggle (Theme 2)
- Three unique themes with distinct layouts, fonts, colors, and spacing
- Theme persistence using localStorage
- Responsive design for desktop and mobile
- Dynamic data fetching from FakeStoreAPI
- Smooth theme transition animations
- Multi-page navigation with React Router (Home, About, Contact)

## Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Build for production: `npm run build`
5. Preview the production build: `npm run preview`

## Dependencies
- React 18
- React Router DOM
- Tailwind CSS
- Framer Motion
- Zustand
- Axios
- Lucide React (icons)

## Project Structure
- `src/components/ui/`: Reusable UI components
- `src/components/layouts/`: Layout components for different themes
- `src/features/`: Feature-specific components
- `src/hooks/`: Custom React hooks
- `src/store/`: Zustand store for theme management
- `src/pages/`: Page components
- `src/styles/`: Global styles and Tailwind configuration

## Themes
1. **Theme 1 (Minimalist)**: Light background, sans-serif font (Inter), clean layout
2. **Theme 2 (Dark Sidebar)**: Dark background, serif font (Merriweather), sidebar navigation
3. **Theme 3 (Colorful Grid)**: Vibrant colors, playful font (Pacifico), card-based grid layout