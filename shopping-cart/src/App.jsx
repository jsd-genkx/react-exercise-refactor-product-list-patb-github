import { useState } from 'react';
// import './App.css';
import ProductForm from './components/ProductForm';
import ProductDashboard from './components/ProductDashboard';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [id, setId] = useState(0);
  const [cart, setCart] = useState([]);

  return (
    <>  
      <h1>Shopping Cart</h1>
      <ProductForm setProducts={setProducts} id={id} setId={setId} />
      <ProductDashboard products={products} cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart}/>
    </>
  )
}

export default App
