import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Donde se hace el root se pone el archivo de sas
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
