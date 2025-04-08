import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const username = "vishal";
  (
    <>
      <h1>Hello vite react application 1{username === "vishal"} </h1>
      <h2> Hello vite react application 2 {2 + 2}</h2>
      <h3> Hello vite react appllication 3 {200 >= 2000}</h3>
       
    </>

  )
 
}


export default {App};
