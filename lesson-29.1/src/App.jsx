import { Provider } from 'react-redux'
import { store } from './redux/store'
import ButtonDecrement from "./components/ButtonDecrement"
import ButtonIncrement from "./components/ButtonIncrement"
import Footer from "./components/Footer"
import Header from "./components/Header"
import '/src/style.css'

const App = ()=> {
  return (
    <Provider store={store}>
      <Header/>
      <ButtonIncrement/>
      <ButtonDecrement/>
      <Footer/>
    </Provider>
  )
}

export default App