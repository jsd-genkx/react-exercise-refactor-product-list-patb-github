import React, {useState} from 'react';

function ProductForm({setProducts, id, setId}) {

    const [inputName, setInputName] = useState("");
    const [inputPrice, setInputPrice] = useState("");
    const [inputImgURL, setInputImgURL] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    function handleInputName(e) {setInputName(e.target.value);}
    function handleInputPrice(e) {setInputPrice(e.target.value);}
    function handleInputImgURL(e) {setInputImgURL(e.target.value);}

    function isValidPrice(price) {
        return /^\d*(\.\d{0,2})?$/.test(price);
    }
    
    function isValidImgUrl(imageURL) {
        const input = new URL(imageURL);
        return /\.(jpg|jpeg|png|gif)$/.test(input.pathname);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (!isValidImgUrl(inputImgURL)) {
            setErrorMessage("Error: Image URL extension must be either .jpg, .jpeg, .png, or .gif");
            return;
        }
        else if (!isValidPrice(inputPrice)) {
            setErrorMessage("Error: Price must be a number with at most two decimal places");
            return;
        } 
        setErrorMessage("");

        const product = {
            id: id,
            name: inputName,
            price: parseFloat(inputPrice),
            url: inputImgURL,
            checked: false
        }

        setProducts(prev => [...prev, product]);
        setId(prev => prev + 1);

        setInputName("");
        setInputPrice("");
        setInputImgURL("");
    }

    return (
        <div>
            <h2>Add Item for Selection</h2>
            <form id="create-product" style={{paddingBottom: 20}} onSubmit={handleSubmit}>
                <label htmlFor="product-name">Product Name:</label>
                <input type="text" id="product-name" 
                        onChange={handleInputName} value={inputName} required />

                <label htmlFor="product-price">Price:</label>
                <input type="text" id="product-price" 
                        onChange={handleInputPrice} value={inputPrice} required />

                <label htmlFor="image-url">Image:</label>
                <input type="text" id="image-url" 
                        onChange={handleInputImgURL} value={inputImgURL} required />

                <button type="submit">Create Product</button>
                <p className="error-message">{errorMessage}</p>
            </form>
        </div>
    )
}

export default ProductForm;