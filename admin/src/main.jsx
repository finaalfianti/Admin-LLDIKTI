// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. IMPORT BrowserRouter
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. BUNGKUS <App /> DENGAN <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);