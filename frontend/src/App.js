import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
