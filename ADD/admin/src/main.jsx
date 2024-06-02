import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <GoogleOAuthProvider clientId='681889592320-69kqptjq89t292re86fqaj0b7hfoj094.apps.googleusercontent.com'>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </GoogleOAuthProvider>
)
