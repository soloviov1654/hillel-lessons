import { Field } from 'react-final-form'
import { TextField } from '@mui/material'

function Input({ name, validate, textFieldProps }) {
  return (
    <Field name={name} validate={validate}>
      {({ input, meta }) => (
        <TextField
          {...input}
          {...textFieldProps}
          fullWidth={textFieldProps?.fullWidth ?? true}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    </Field>
  )
}

export default Input
