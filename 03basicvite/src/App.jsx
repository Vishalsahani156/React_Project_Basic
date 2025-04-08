import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './content/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md"> vite application run </h1>
      <Card username={"kumar"}captan={"vivek"}/>   
      <Card/>
    </>
  )
}

export default App
