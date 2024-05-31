import React from 'react';

function CartCard({product, setCart}) {

    function handleClick() {
        setCart(prev => prev.filter(
            p => p.id !== product.id 
        ));
    }

    return (
        <div className="product-card">
            <img src={product.url} height="120" width="120" />
            <div style={{paddingLeft: 15}}>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button className="remove-btn" onClick={handleClick}>Remove</button>
            </div>
        </div>
    )
}

export default CartCard;