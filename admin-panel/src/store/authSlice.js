import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  loginError: '',
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loginError = ''
    },
    loginSuccess(state, action) {
      state.isAuth = true
      state.user = action.payload
      state.loginError = ''
    },
    loginFailure(state, action) {
      state.isAuth = false
      state.user = null
      state.loginError = action.payload
    },
    logout(state) {
      state.isAuth = false
      state.user = null
      state.loginError = ''
    },
  },
})

export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions

export default authSlice.reducer
