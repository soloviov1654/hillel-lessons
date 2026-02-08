import { Field } from 'react-final-form'
import { MenuItem, TextField } from '@mui/material'

function Select({ name, label, options }) {
  return (
    <Field name={name}>
      {({ input }) => (
        <TextField {...input} label={label} select fullWidth>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Field>
  )
}

export default Select
