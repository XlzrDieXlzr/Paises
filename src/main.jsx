import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "primereact/resources/themes/lara-light-indigo/theme.css"
import 'bootstrap/dist/css/bootstrap.min2.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
