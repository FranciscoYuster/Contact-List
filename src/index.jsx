import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap si lo usas
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <BrowserRouter basename='/Contact-List'>
      <ContactProvider>
        <App/>
      </ContactProvider>
    </BrowserRouter>
  </React.StrictMode>

);
