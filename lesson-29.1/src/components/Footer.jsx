import { useSelector } from "react-redux"
import selectors from "../redux/selectors"

const Footer = () => {
    const value= useSelector(selectors.counter.value)
 return (
    <footer >footer: {value}</footer>
 )
}

export default Footer