import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

                                  // public/index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // rootに以下をレンダリング
  <React.StrictMode>  
    <App />
  </React.StrictMode>
);
