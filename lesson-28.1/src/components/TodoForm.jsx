import Input from "./Input"
import Button from "@mui/material/Button"
import { required } from '../helpers/validators'

const TodoForm = ({ handleSubmit, submitted }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input name="name" label="Name" validate={required} />
      <Button variant="outlined" type="submit">
        Add
      </Button>

      
    </form>
  )
}

export default TodoForm