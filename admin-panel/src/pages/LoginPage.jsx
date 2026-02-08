import Form from '../components/form/Form'
import Input from '../components/form/Input'
import InputPassword from '../components/form/InputPassword'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { loginRequest } from '../store/authSlice'

const required = (value) => (value ? undefined : 'Обязательное поле')

function LoginPage() {
  const dispatch = useDispatch()
  const loginError = useSelector((state) => state.auth.loginError)

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

          <Form onSubmit={handleSubmit}>
            {({ submitting }) => (
              <Box sx={{ display: 'grid', gap: 2 }}>
                <Input
                  name="login"
                  validate={required}
                  textFieldProps={{
                    label: 'Логин',
                    placeholder: 'admin',
                    autoComplete: 'username',
                  }}
                />
                <InputPassword
                  name="password"
                  validate={required}
                  textFieldProps={{
                    label: 'Пароль',
                    placeholder: 'admin123',
                    autoComplete: 'current-password',
                  }}
                />
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
          </Form>

          <Typography variant="caption" color="text.secondary">
            Демо доступ: admin / admin123
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default LoginPage
