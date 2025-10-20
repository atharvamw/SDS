import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContext, AuthProvider } from './context/Auth.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  //</StrictMode>,
)
