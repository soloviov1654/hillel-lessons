import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { counter } from "../redux/slices/CounterSlice";

const ButtonDecrement = () => {
    const dispatch = useDispatch();
      const handleClick = () => {
        dispatch(counter.actions.decrement())
        console.log(counter)
      };
 return (
    <Button variant="contained" onClick={handleClick}>-</Button>
 )
}

export default ButtonDecrement