import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.scss";
import { DarkModeProvider } from './context/DarkModeContext.jsx'; 

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    {/*  // loads console twice for bug checks */}

    <DarkModeProvider>
    <App />

    </DarkModeProvider>
  </React.StrictMode>,
)
