import { Formik } from 'formik'
import { useState } from 'react'
import TodoForm from './components/TodoForm'
import ItemsList from './components/ItemsList'

function App() {
  const [todos, setTodos] = useState([])
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <h1>Todo List</h1>

      <Formik
        initialValues={{ name: '' }}
        onSubmit={(values, { resetForm }) => {
          setTodos((prev) => [...prev, values.name])
          setSubmitted(true)
          resetForm()
        }}
      >
        {(formikProps) => (
          <TodoForm {...formikProps} submitted={submitted} />
        )}
      </Formik>

      <ItemsList items={todos} />
    </>
  )
}

export default App