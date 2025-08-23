
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthContextProvider } from "./Contexts/AuthContext"
import App from './App'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </AuthContextProvider>
)