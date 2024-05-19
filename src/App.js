import React from 'react';
import { products } from './products/products.js';
import Store from './components/Store';


function App() {
  console.log ()
  return (
    <>
      <Store cards={products}/>
    </>
  );
}

export default App;