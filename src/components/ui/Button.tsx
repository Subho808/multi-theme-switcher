import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-2 bg-[var(--color-accent)] text-[var(--color-background)] rounded-[var(--border-radius)] hover:bg-[var(--color-accent)]/80 transition-colors"
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export default Button