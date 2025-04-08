import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(8);

  const addValue = () => {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (

    <>
      <h1>React my basic code in Udemy {counter}</h1>
      <h2>Counter the value and add or remove  value{counter}</h2>
      <button onClick={addValue}> add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>Footer Section :{counter}</p>
      {/* <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw0wu5_fVL03lEplPrh3DBVp&ust=1743501952539000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCtyYuJtIwDFQAAAAAdAAAAABAE'/> */}
    {/* <img src='pppp'/> */}
    {/* <img src="./fileP/footer-blog-1.jpg" alt="My Image" /> */}

    {/* <img src="footer-blog-1.jpg" alt="hair image" /> */}
    <img src="./moreP/gallery-2.jpg" alt="img1" />
    <img src="" alt="img2" />

    </>
  )
}

export default App
