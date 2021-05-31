import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import WishlistState from './context/wishlist/WishlistState';

ReactDOM.render(
  <React.StrictMode>
    <WishlistState>
      <App />
    </WishlistState>
  </React.StrictMode>,
  document.getElementById('root')
);


