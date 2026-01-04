import { configureStore } from '@reduxjs/toolkit'
import { counter } from './slices/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counter.reducer
  },
})