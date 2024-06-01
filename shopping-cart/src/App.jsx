import { useState } from 'react';
// import './App.css';
import ProductForm from './components/ProductForm';
import ProductDashboard from './components/ProductDashboard';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Product 1",
      price: 10.0,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      checked: false,
    },
    {
      id: 1,
      name: "Product 2",
      price: 10.0,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      checked: false,
    }
  ]);
  const [id, setId] = useState(2);
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
