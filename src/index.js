import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './style.css';
import App from './App';
import Demo  from './components/inner-1'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
