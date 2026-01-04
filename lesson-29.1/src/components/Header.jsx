import { useSelector } from "react-redux"
import selectors from "../redux/selectors"

const Header = () => {
    const value= useSelector(selectors.counter.value)
 return (
    <header>header: {value}</header>
 )
}

export default Header