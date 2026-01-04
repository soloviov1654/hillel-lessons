import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const TodoCounter = () => {
  const count = useSelector((state) => state.todos.items.length);

  return (
    <Typography variant="h6">
      Todos count: {count}
    </Typography>
  );
};

export default TodoCounter;