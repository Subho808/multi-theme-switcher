import React from 'react'
import { useTheme } from '../store/ThemeContext'
import Button from '../components/ui/Button'
import Sidebar from '../components/layouts/Sidebar'
import { motion } from 'framer-motion'

const ContactPage: React.FC = () => {
  const { theme, isSidebarOpen  } = useTheme()

  return (
    <div className="container mx-auto px-4 py-8">
      {theme === 'theme2' && <Sidebar />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={theme === 'theme2' && isSidebarOpen  ? 'ml-0 md:ml-72' : ''}
      >
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-6 text-lg">
          Have questions or feedback about ThemeSwitch? Reach out to us! This page demonstrates how
          our multi-theme system adapts across different sections of the application.
        </p>
        <form className="space-y-4 max-w-lg">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 rounded-[var(--border-radius)] border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded-[var(--border-radius)] border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full p-2 rounded-[var(--border-radius)] border border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
              rows={5}
              placeholder="Your Message"
            />
          </div>
          <Button>Send Message</Button>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactPage