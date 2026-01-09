import React from 'react'
import AppRouter from './routes/AppRouter'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { FloatingNav } from './global/components/layout/FloatingNav';

export const App = () => {

  return (
    <>
    <Router>
      <div className="p-4">
        <AppRouter />
      </div>
      <FloatingNav/>
    </Router>
    
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </>
  )
}
