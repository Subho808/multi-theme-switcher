# Multi-Theme Switcher App

#Live URL: https://multithemeswitcher.netlify.app

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
- <img width="1918" height="871" alt="Screenshot 2025-08-03 001225" src="https://github.com/user-attachments/assets/77d3affb-5038-47ad-b3b5-11127624bff6" />
<img width="1900" height="870" alt="Screenshot 2025-08-03 001241" src="https://github.com/user-attachments/assets/3ff0acb3-92f7-44dd-8b6a-4adf7434016a" />
<img width="1898" height="865" alt="Screenshot 2025-08-03 001316" src="https://github.com/user-attachments/assets/de943760-d23a-4784-8cf3-25d2220124f0" />
<img width="1915" height="869" alt="Screenshot 2025-08-03 001405" src="https://github.com/user-attachments/assets/231728cf-e272-4bd9-8472-6064d87c88a5" />
<img width="1564" height="865" alt="Screenshot 2025-08-03 001026" src="https://github.com/user-attachments/assets/ccb7cf10-cd61-477b-b9f2-24b7a42c7cc4" />


## Themes
1. **Theme 1 (Minimalist)**: Light background, sans-serif font (Inter), clean layout
2. **Theme 2 (Dark Sidebar)**: Dark background, serif font (Merriweather), sidebar navigation
3. **Theme 3 (Colorful Grid)**: Vibrant colors, playful font (Pacifico), card-based grid layout
