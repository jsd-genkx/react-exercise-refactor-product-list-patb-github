import React, {useState} from 'react'
import ProductDashboardCard from './ProductDashboardCard'

function ProductDashboard({products, cart, setCart}) {
    const [errorMessage, setErrorMessage] = useState("");
    function handleClick() {
        if (products.every(p => !p.checked)) {
            setErrorMessage("Please select at least 1 product.");
            return;
        }
        // transfers checked products into cart
        setCart(products.filter(p => p.checked));
        setErrorMessage("");
    }

    return (
        <div>
            <h2>Product Dashboard</h2>
            <div className="board">
                {products.map(product => <ProductDashboardCard product={product} key={product.id}/>)}
            </div>
            {products.length !== 0 && <button onClick={handleClick}>Add to Cart</button>}
            <p className="error-message">{errorMessage}</p>
        </div>
    )
}

export default ProductDashboard