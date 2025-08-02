import React from 'react'
import { useTheme } from '../store/ThemeContext'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Sidebar from '../components/layouts/Sidebar'
import { useProducts } from '../hooks/useProducts'
import { motion } from 'framer-motion'

const HomePage: React.FC = () => {
  const { theme, isSidebarOpen } = useTheme()
  const { products, loading, error } = useProducts()
console.log(isSidebarOpen);

  return (
    <div className="container mx-auto px-4 py-8">
      {theme === 'theme2' && <Sidebar />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={theme === 'theme2' && isSidebarOpen ? 'ml-0 md:ml-72' : ''}
      >
        <h1 className="text-4xl font-bold mb-6">Welcome to ThemeSwitch</h1>
        <p className="mb-6 text-lg">
          Explore our multi-theme application with dynamic content and responsive design.
          Switch between themes using the dropdown in the header.
        </p>
        <Button>Learn More</Button>
        <div
          className={
            theme === 'theme3'
              ? 'grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'
              : 'space-y-6 mt-8'
          }
        >
          {loading && <p>Loading products...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default HomePage