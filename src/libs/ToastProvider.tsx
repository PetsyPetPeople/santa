'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastProvider = () => {
  return <ToastContainer autoClose={5000} hideProgressBar closeOnClick pauseOnHover />;
};

export default ToastProvider;
