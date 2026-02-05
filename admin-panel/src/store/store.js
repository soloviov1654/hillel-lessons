import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { createReduxHistoryContext } from 'redux-first-history'
import authReducer from './authSlice'
import productsReducer from './productsSlice'
import rootSaga from './sagas'

const browserHistory = createBrowserHistory()
const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: browserHistory,
  })

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    router: routerReducer,
    auth: authReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(routerMiddleware, sagaMiddleware),
})

export const history = createReduxHistory(store)

sagaMiddleware.run(rootSaga)
