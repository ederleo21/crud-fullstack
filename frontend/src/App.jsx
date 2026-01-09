import AppRouter from './routes/AppRouter'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { FloatingNav } from './global/components/layout/FloatingNav';
import { store } from './store/store';
import { Provider } from 'react-redux'

export const App = () => {

  return (
    <>
    <Router>
      <Provider store={store} >
        <div>
          <AppRouter />
        </div>
      </Provider>
      <FloatingNav/>
    </Router>
    
      <ToastContainer
        position="top-right"
        autoClose={2000}
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
