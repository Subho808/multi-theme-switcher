import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../store/ThemeContext'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  const { theme, setTheme, toggleSidebar, isSidebarOpen } = useTheme()

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-[var(--color-secondary)] shadow-md z-50"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className='flex items-center space-x-4'>
              {theme === 'theme2' && (
          <button
            onClick={toggleSidebar}
            className="mr-4 p-2 rounded-md hover:bg-[var(--color-primary)]/20 transition-colors"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full" />
          <span className="text-xl font-bold">ThemeSwitch</span>
        </Link>
        </div>
    
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-[var(--color-accent)] transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-[var(--color-accent)] transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-[var(--color-accent)] transition-colors">
              Contact
            </Link>
          </nav>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="p-2 rounded-md bg-[var(--color-background)] border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          >
            <option value="theme1">Minimalist</option>
            <option value="theme2">Dark Sidebar</option>
            <option value="theme3">Colorful Grid</option>
          </select>
        </div>
      </div>
    </motion.header>
  )
}

export default Header