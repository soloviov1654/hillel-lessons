import { useState } from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  SvgIcon,
  Typography,
  TextField,
} from '@mui/material'
import { loginRequest } from '../store/authSlice'

const required = (value) => (value ? undefined : 'Обязательное поле')

function LoginPage() {
  const dispatch = useDispatch()
  const loginError = useSelector((state) => state.auth.loginError)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (values) => {
    dispatch(loginRequest(values))
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        p: 3,
        background:
          'radial-gradient(circle at top, #fff1d7 0%, #f7f3ed 45%, #ebe5dc 100%)',
      }}
    >
      <Card sx={{ width: 'min(420px, 100%)' }}>
        <CardContent sx={{ display: 'grid', gap: 2 }}>
          <Typography variant="overline" color="primary">
            Олимп | Admin
          </Typography>
          <Typography variant="h4">Вход в админ-панель</Typography>
          <Typography variant="body2" color="text.secondary">
            Используй тестовые данные доступа
          </Typography>

          <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, submitting }) => (
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2 }}>
                <Field name="login" validate={required}>
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Логин"
                      placeholder="admin"
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                      autoComplete="username"
                    />
                  )}
                </Field>
                <Field name="password" validate={required}>
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      type={showPassword ? 'text' : 'password'}
                      label="Пароль"
                      placeholder="admin123"
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label={
                                showPassword ? 'Скрыть пароль' : 'Показать пароль'
                              }
                              onClick={() => setShowPassword((prev) => !prev)}
                              edge="end"
                            >
                              {showPassword ? (
                                <SvgIcon viewBox="0 0 24 24">
                                  <path d="M2.1 3.51 3.51 2.1l18.39 18.39-1.41 1.41-3.02-3.02A11.86 11.86 0 0 1 12 20C6.5 20 2 16 0 12c.65-1.18 1.5-2.38 2.63-3.5l-.53-.99ZM12 7a5 5 0 0 1 5 5c0 .64-.13 1.25-.35 1.81l-1.56-1.56A3 3 0 0 0 11.75 9.9L9.6 7.75C10.15 7.27 10.83 7 11.5 7Zm0-3c5.5 0 10 4 12 8-1.03 1.87-2.51 3.54-4.3 4.76l-2.1-2.1A5 5 0 0 0 12 7c-.52 0-1.03.08-1.5.23L7.9 5.63A12.25 12.25 0 0 1 12 4Zm-8 8c1.37 2.21 4.33 4 8 4 1.18 0 2.26-.2 3.2-.55l-1.63-1.63A5 5 0 0 1 7.1 9.9L4 12Z" />
                                </SvgIcon>
                              ) : (
                                <SvgIcon viewBox="0 0 24 24">
                                  <path d="M12 5c5.5 0 10 4 12 7-2 3-6.5 7-12 7S2 15 0 12c2-3 6.5-7 12-7Zm0 2C8.07 7 4.6 9.06 2.7 12 4.6 14.94 8.07 17 12 17s7.4-2.06 9.3-5C19.4 9.06 15.93 7 12 7Zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Z" />
                                </SvgIcon>
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                </Field>
                {loginError ? (
                  <Typography color="error" variant="body2">
                    {loginError}
                  </Typography>
                ) : null}
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={submitting}
                >
                  Войти
                </Button>
              </Box>
            )}
          />

          <Typography variant="caption" color="text.secondary">
            Демо доступ: admin / admin123
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default LoginPage
