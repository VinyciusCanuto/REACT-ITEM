import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Lista from './ListaItem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Lista/>
  </React.StrictMode>,
)
