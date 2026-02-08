import { Field } from 'react-final-form'
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material'

function Checkbox({ name, label }) {
  return (
    <Field name={name} type="checkbox">
      {({ input }) => (
        <FormControlLabel
          control={
            <MuiCheckbox
              checked={Boolean(input.value)}
              onChange={(event) => input.onChange(event.target.checked)}
            />
          }
          label={label}
        />
      )}
    </Field>
  )
}

export default Checkbox
