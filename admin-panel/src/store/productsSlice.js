import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  loading: false,
  error: '',
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest(state) {
      state.loading = true
      state.error = ''
    },
    fetchProductsSuccess(state, action) {
      state.items = action.payload
      state.loading = false
      state.error = ''
    },
    fetchProductsFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    createProductRequest(state) {
      state.error = ''
    },
    createProductSuccess(state, action) {
      state.items = [action.payload, ...state.items]
    },
    createProductFailure(state, action) {
      state.error = action.payload
    },
    updateProductRequest(state) {
      state.error = ''
    },
    updateProductSuccess(state, action) {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      )
    },
    updateProductFailure(state, action) {
      state.error = action.payload
    },
    deleteProductRequest(state) {
      state.error = ''
    },
    deleteProductSuccess(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    deleteProductFailure(state, action) {
      state.error = action.payload
    },
  },
})

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  createProductRequest,
  createProductSuccess,
  createProductFailure,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductFailure,
} = productsSlice.actions

export default productsSlice.reducer
