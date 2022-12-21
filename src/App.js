import './App.css';
import AppRoutes from './AppRouters';

// import {  toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer position='bottom-right'/>
    </>
  );
}

export default App;
