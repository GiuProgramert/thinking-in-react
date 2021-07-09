import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './FilterableProductTable';
import reportWebVitals from './reportWebVitals';

import products from './backend/products.json';

ReactDOM.render(
  <React.StrictMode>
    <FilterableProductTable products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
