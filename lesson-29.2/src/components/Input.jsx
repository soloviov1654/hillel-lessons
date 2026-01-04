import { TextField } from "@mui/material";
import { useField } from "formik";

const Input = ({ label, name }) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      {...field}
      label={label}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

export default Input;