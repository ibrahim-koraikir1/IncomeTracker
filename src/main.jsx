import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Formstate from './context/Formstate'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Formstate>
    <App />
    </Formstate>
   
  </React.StrictMode>
)
