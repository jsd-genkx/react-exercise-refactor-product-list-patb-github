import React, {useState} from 'react'
import CartCard from './CartCard';

function Cart({cart, setCart}) {
    const [total, setTotal] = useState("");
    function calculateTotal() {
        const sum = cart.reduce((acc, product) => acc + product.price, 0);
        setTotal(`You have to pay: $${sum.toFixed(2)}`);
    }

    return (
        <div>
            <h2>Cart</h2>
            <div className="board">
                {cart.map(product => <CartCard product={product} setCart={setCart} key={product.id}/>)}
            </div>
            <p className="error-message"></p>
            {cart.length !== 0 && <button onClick={calculateTotal}>Calculate Final Price</button>}

            <h2 id="final-price-container">{total}</h2>
        </div>
    )
}

export default Cart

