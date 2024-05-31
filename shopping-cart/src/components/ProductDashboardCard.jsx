import React from 'react';

function ProductDashboardCard({product}) {

    function handleClick() {
        product.checked = !product.checked;
    }

    return (
        <div className="product-card">
            <input type="checkbox" onClick={handleClick} />
            <img src={product.url} height="120" width="120" />
            <div style={{paddingLeft: 15}}>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default ProductDashboardCard;