import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ProductProvider from '../src/context/product.context';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ProductProvider>
          <div className='container'>
            <App/>
          </div>
        </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();