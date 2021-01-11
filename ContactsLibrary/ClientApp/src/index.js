import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactsApp from './components/ContactsApp';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactsApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
