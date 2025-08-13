
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';


// createRoot(document.getElementById('root')).render(

//     <ToastContainer />
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// )

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)