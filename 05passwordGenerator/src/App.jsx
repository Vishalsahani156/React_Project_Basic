import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const passwordRef = useRef(null)
  const [password, setPassword] = useState()
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length, setLength] = useState(6)

  // This is using by  Callback huke in react 
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "sdksdfjdsjkfjdoifedfidofdsjcdkcnasdjwdoisadSSADSADijdisdjisdSDUSDSU";
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%&^%*"
    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, charAllowed, numberAllowed, password])

  // By using useEffect 
  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipart = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  }


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500' style={{ backgroundColor: 'blue' }}>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipart}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div
          className='flex text-sm gap-x-2'
        >
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
              name=""
              id=""


            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
              name=""
              id="" />
            <label htmlFor="number">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              name=""
              id="" />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )

}
export default App
