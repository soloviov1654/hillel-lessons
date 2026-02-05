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
  Stack,
  Switch,
  TextField,
} from '@mui/material'
import { createProductRequest } from '../store/productsSlice'

const GENDER_OPTIONS = ['male', 'female', 'teen', 'kid']
const SEASON_OPTIONS = ['autumn-winter', 'spring-summer', 'home']

const required = (value) => (value ? undefined : 'Обязательное поле')

const initialValues = {
  title: '',
  image: '',
  gender: 'male',
  season: 'autumn-winter',
  isNew: false,
  isColor: false,
}

function AddProductDialog({ open, onClose }) {
  const dispatch = useDispatch()

  const handleSubmit = (values) => {
    dispatch(
      createProductRequest({
        ...values,
      }),
    )
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Добавить товар</DialogTitle>
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Field name="title" validate={required}>
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Название"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
                <Field name="image" validate={required}>
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      label="Путь к картинке"
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
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
                Добавить
              </Button>
            </DialogActions>
          </form>
        )}
      />
    </Dialog>
  )
}

export default AddProductDialog
