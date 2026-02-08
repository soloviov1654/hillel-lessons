import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { push } from 'redux-first-history'
import { loginFailure, loginRequest, loginSuccess, logout } from './authSlice'
import {
  createProductFailure,
  createProductRequest,
  createProductSuccess,
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
  updateProductFailure,
  updateProductRequest,
  updateProductSuccess,
} from './productsSlice'
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from '../api/productsApi'

const AUTH = {
  login: 'admin',
  password: 'admin123',
}

function* handleLogin(action) {
  const { login, password } = action.payload
  if (login.trim() === AUTH.login && password === AUTH.password) {
    yield put(loginSuccess({ login }))
    yield put(push('/products'))
    return
  }
  yield put(loginFailure('Неверный логин или пароль.'))
}

function* handleLogout() {
  yield put(push('/login'))
}

function* handleFetchProducts() {
  try {
    const response = yield call(fetchProducts)
    const data = Array.isArray(response.data) ? response.data : []
    yield put(fetchProductsSuccess(data))
  } catch (error) {
    yield put(
      fetchProductsFailure('Не удалось загрузить данные с сервера.'),
    )
  }
}

function* handleCreateProduct(action) {
  try {
    const response = yield call(createProduct, action.payload)
    yield put(createProductSuccess(response.data))
  } catch (error) {
    yield put(createProductFailure('Не удалось добавить товар.'))
  }
}

function* handleUpdateProduct(action) {
  try {
    const response = yield call(
      updateProduct,
      action.payload.id,
      action.payload,
    )
    yield put(updateProductSuccess(response.data))
  } catch (error) {
    yield put(updateProductFailure('Не удалось обновить товар.'))
  }
}

function* handleDeleteProduct(action) {
  try {
    yield call(deleteProduct, action.payload)
    yield put(deleteProductSuccess(action.payload))
  } catch (error) {
    yield put(deleteProductFailure('Не удалось удалить товар.'))
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(loginRequest.type, handleLogin),
    takeLatest(logout.type, handleLogout),
    takeLatest(fetchProductsRequest.type, handleFetchProducts),
    takeEvery(createProductRequest.type, handleCreateProduct),
    takeLatest(updateProductRequest.type, handleUpdateProduct),
    takeEvery(deleteProductRequest.type, handleDeleteProduct),
  ])
}
