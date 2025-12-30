import { useField } from 'formik'
import TextField from '@mui/material/TextField'

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <TextField
      {...field}
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      fullWidth
    />
  )
}

export default Input