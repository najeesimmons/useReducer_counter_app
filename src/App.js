import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  const decrement = ((prevCount) => {
    setCount(prevCount - 1)
  })

  const increment = ((prevCount) => {
    setCount(prevCount + 1)
  })
  
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
