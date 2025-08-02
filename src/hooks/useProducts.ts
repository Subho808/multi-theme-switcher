import { useState, useEffect } from 'react'
import axios from 'axios'

interface Product {
  id: number
  title: string
  description: string
  image: string
}

interface UseProductsResult {
  products: Product[]
  loading: boolean
  error: string | null
}

export const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=6')
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products')
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return { products, loading, error }
}