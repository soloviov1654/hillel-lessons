import { useDispatch } from 'react-redux'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material'
import { updateProductRequest } from '../store/productsSlice'
import Form from './form/Form'
import Input from './form/Input'
import Select from './form/Select'
import Checkbox from './form/Checkbox'

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
      <Form initialValues={product} onSubmit={handleSubmit}>
        {() => (
          <>
            <DialogContent>
              <Stack spacing={2} sx={{ mt: 1 }}>
                <Input name="title" textFieldProps={{ label: 'Название' }} />
                <Input name="image" textFieldProps={{ label: 'Путь к картинке' }} />
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
                Сохранить
              </Button>
            </DialogActions>
          </>
        )}
      </Form>
    </Dialog>
  )
}

export default EditProductDialog
