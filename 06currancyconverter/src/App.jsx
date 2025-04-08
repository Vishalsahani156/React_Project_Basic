import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> hello this is cheak the tailwind css </h1>
     <h1 className="text-3xl bg-green-500 p-3 rounded-md"style={{backgroundColor:'red'}}> vite application run </h1>
        
    </>
  )
}

export default App
