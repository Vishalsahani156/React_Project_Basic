import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import mi from './images/footer-blog-1.jpg'
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: '_blank'

  },
  Children: 'click me to  visit google'
}
// thi is the litle html code 
const anoderElement = (
  <a href='https://google.com' target='_blank'>To visiti the google officeal page </a>

)
// this is the react code 
const creat = React.createElement(
  'a',
  {
    href: "https://google.com", target: "_blank"
  },
  'click to visite google'
)


createRoot(document.getElementById('root')).render(
  creat,
  <App/>
)
