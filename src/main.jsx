import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Toaster} from "react-hot-toast"
import './index.css'
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster />
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false} />
   
  </React.StrictMode>,
)
