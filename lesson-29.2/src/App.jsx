import {Provider} from 'react-redux'
import {store} from './redux/store'
import TodoForm from './components/TodoForm'
import ItemsList from './components/ItemsList'
import TodoCounter from './components/TodoCounter'

const App = () => {
  
  return (
    <Provider store={store}>
      <h1>Todo list</h1>
      <TodoForm/>
      <ItemsList/>
      <TodoCounter/>
    </Provider>
  )
}

export default App
