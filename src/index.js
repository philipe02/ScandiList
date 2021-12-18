import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import ProductAdd from './pages/ProductAdd';
import ProductList from './pages/ProductList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className='container mt-4'>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="add-product" element={<ProductAdd />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
