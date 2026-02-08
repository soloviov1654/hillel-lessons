import { Form as FinalForm } from 'react-final-form'
import { Box } from '@mui/material'

function Form({ onSubmit, initialValues, children, ...rest }) {
  return (
    <FinalForm
      onSubmit={onSubmit}
      initialValues={initialValues}
      {...rest}
      render={(formProps) => (
        <Box component="form" onSubmit={formProps.handleSubmit} noValidate>
          {typeof children === 'function' ? children(formProps) : children}
        </Box>
      )}
    />
  )
}

export default Form
