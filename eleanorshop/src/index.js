import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CartProvider } from './components/context/CartContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
  <GoogleOAuthProvider clientId='681889592320-69kqptjq89t292re86fqaj0b7hfoj094.apps.googleusercontent.com'>
   
  <React.StrictMode>
    <App />
  </React.StrictMode>
 
  </GoogleOAuthProvider>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
