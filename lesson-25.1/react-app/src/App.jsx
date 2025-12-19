import { useState } from 'react'
import Smiles from './components/Smiles'
import ResultButton from './components/ResultButton'
import ClearButton from './components/ClearButton'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Smiles />
    </>
  )
}

export default App
