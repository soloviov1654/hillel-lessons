import axios from 'axios'

const api = axios.create({
  baseURL: 'https://69846dde885008c00db1296e.mockapi.io/api/cards',
  timeout: 5000,
})

export const fetchProducts = () => api.get('/products')
export const createProduct = (payload) => api.post('/products', payload)
export const updateProduct = (id, payload) => api.put(`/products/${id}`, payload)
export const deleteProduct = (id) => api.delete(`/products/${id}`)
