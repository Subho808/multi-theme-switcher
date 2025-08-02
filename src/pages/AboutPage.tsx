import React from 'react'
import { useTheme } from '../store/ThemeContext'
import Button from '../components/ui/Button'
import Sidebar from '../components/layouts/Sidebar'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
  const { theme, isSidebarOpen  } = useTheme()

  return (
    <div className="container mx-auto px-4 py-8">
      {theme === 'theme2'  && <Sidebar />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={theme === 'theme2' && isSidebarOpen  ? 'ml-0 md:ml-72' : ''}
      >
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="mb-6 text-lg">
          ThemeSwitch is a demonstration of a multi-theme React application built with TypeScript and
          Tailwind CSS. It showcases three distinct themes with unique layouts, typography, and color
          schemes. The app is fully responsive and includes dynamic content fetched from an API.
        </p>
        <p className="mb-6 text-lg">
          Our goal is to provide a seamless user experience with smooth theme transitions and
          persistent theme selection. Explore the app to see how different design systems can
          transform the look and feel of a web application.
        </p>
        <Button>Back to Home</Button>
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-semibold">Our Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Three unique themes with distinct layouts</li>
            <li>Responsive design for all devices</li>
            <li>Dynamic content loading from FakeStoreAPI</li>
            <li>Smooth animations with Framer Motion</li>
            <li>Theme persistence with localStorage</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage