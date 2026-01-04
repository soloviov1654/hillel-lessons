import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { counter } from "../redux/slices/CounterSlice";

const ButtonIncrement = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(counter.actions.increment())
    console.log(counter)
  };
  return (
    <Button variant="contained" onClick={handleClick}>
      +
    </Button>
  );
};

export default ButtonIncrement;
