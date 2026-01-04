import { Formik, Form } from "formik";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { todos } from "../redux/slices/todoSlice";
import Input from "./Input";

const TodoForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(todos.actions.addItem({ text: values.name }));
        resetForm();
      }}
    >
      <Form>
        <Input name="name" label="Name" />

        <Button type="submit" variant="outlined" sx={{ height: "56px" }}>
          ADD
        </Button>
      </Form>
    </Formik>
  );
};

export default TodoForm;