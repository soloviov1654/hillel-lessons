import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HistoryRouter } from 'redux-first-history/rr6'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import App from './App.jsx'
import { history, store } from './store/store.js'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0f5d5c',
    },
    secondary: {
      main: '#f05a2c',
    },
    background: {
      default: '#f7f3ed',
      paper: '#fffdfa',
    },
  },
  typography: {
    fontFamily: '"Public Sans", "Segoe UI", sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 16,
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </HistoryRouter>
    </Provider>
  </StrictMode>,
)
