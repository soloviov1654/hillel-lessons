import { useDispatch } from 'react-redux'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material'
import { createProductRequest } from '../store/productsSlice'
import Form from './form/Form'
import Input from './form/Input'
import Select from './form/Select'
import Checkbox from './form/Checkbox'

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
    dispatch(createProductRequest({ ...values }))
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Добавить товар</DialogTitle>
      <Form initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <>
            <DialogContent>
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Input
                  name="title"
                  validate={required}
                  textFieldProps={{ label: 'Название' }}
                />
                <Input
                  name="image"
                  validate={required}
                  textFieldProps={{ label: 'Путь к картинке' }}
                />
                <Select name="gender" label="Пол" options={GENDER_OPTIONS} />
                <Select name="season" label="Сезон" options={SEASON_OPTIONS} />
                <Stack direction="row" spacing={2}>
                  <Checkbox name="isNew" label="Новинка" />
                  <Checkbox name="isColor" label="Цветная серия" />
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
          </>
        )}
      </Form>
    </Dialog>
  )
}

export default AddProductDialog
