import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>I am doing a great job!</div>
      <div>And I want to know {import.meta.env.VITE_NATYKAS_VAR}</div>
    </>
  )
}

export default App
