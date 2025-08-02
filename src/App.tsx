import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './store/ThemeContext'
import Header from './components/layouts/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import { motion } from 'framer-motion'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
      </div>
    </ThemeProvider>
  )
}

export default App