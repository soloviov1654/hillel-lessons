import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  MenuItem,
  Switch,
  Stack,
  TextField,
} from '@mui/material'
import { updateProductRequest } from '../store/productsSlice'

const GENDER_OPTIONS = ['male', 'female', 'teen', 'kid']
const SEASON_OPTIONS = ['autumn-winter', 'spring-summer', 'home']

function EditProductDialog({ product, onClose }) {
  const dispatch = useDispatch()

  if (!product) {
    return null
  }

  const handleSubmit = (values) => {
    dispatch(updateProductRequest({ ...product, ...values }))
    onClose()
  }

  return (
    <Dialog open={Boolean(product)} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Редактирование товара</DialogTitle>
      <Form
        initialValues={product}
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Field name="title">
                  {({ input }) => <TextField {...input} label="Название" fullWidth />}
                </Field>
                <Field name="image">
                  {({ input }) => (
                    <TextField {...input} label="Путь к картинке" fullWidth />
                  )}
                </Field>
                <Field name="gender">
                  {({ input }) => (
                    <TextField {...input} label="Пол" select fullWidth>
                      {GENDER_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>
                <Field name="season">
                  {({ input }) => (
                    <TextField {...input} label="Сезон" select fullWidth>
                      {SEASON_OPTIONS.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>
                <Stack direction="row" spacing={2}>
                  <Field name="isNew" type="checkbox">
                    {({ input }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={Boolean(input.value)}
                            onChange={(event) => input.onChange(event.target.checked)}
                          />
                        }
                        label="Новинка"
                      />
                    )}
                  </Field>
                  <Field name="isColor" type="checkbox">
                    {({ input }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            checked={Boolean(input.value)}
                            onChange={(event) => input.onChange(event.target.checked)}
                          />
                        }
                        label="Цветная серия"
                      />
                    )}
                  </Field>
                </Stack>
              </Stack>
            </DialogContent>
            <DialogActions sx={{ p: 2 }}>
              <Button onClick={onClose} variant="outlined">
                Отмена
              </Button>
              <Button type="submit" variant="contained" color="secondary">
                Сохранить
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </Dialog>
  )
}

export default EditProductDialog
