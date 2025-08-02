import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../store/ThemeContext'
import { motion } from 'framer-motion'

const Sidebar: React.FC = () => {
  const { isSidebarOpen } = useTheme()

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: isSidebarOpen ? 0 : -250 }}
      transition={{ duration: 0.3 }}
      className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[var(--color-secondary)] shadow-lg z-40 md:w-72"
    >
      <nav className="flex flex-col p-4 space-y-4">
        <Link
          to="/"
          className="p-2 rounded-md hover:bg-[var(--color-primary)]/20 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="p-2 rounded-md hover:bg-[var(--color-primary)]/20 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="p-2 rounded-md hover:bg-[var(--color-primary)]/20 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </motion.aside>
  )
}

export default Sidebar