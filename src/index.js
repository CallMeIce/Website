import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './components/style.css'
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

