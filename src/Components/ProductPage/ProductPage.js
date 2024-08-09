import React, {useEffect, useState} from 'react';
import './ProductPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from "react-router-dom";
import {addToCart} from "../../redux/features/cartSlice";
import {getProductById} from "../../service/Api";
import {alertAddToCart, alertError, alertInfo} from "../../alerts";
const ProductPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(50);
    const [customPrice, setCustomPrice] = useState('');
    const [readMore, setReadMore] = useState(false);
    const [loading, setLoading] = useState(false);
    const [openSection, setOpenSection] = useState(null); // State to track which accordion section is open
    const cartItems = useSelector(state => state.cart.items || {});
    const isInCart = cartItems[id] !== undefined;
    console.log("product id:", id);
    console.log("Cart items:", cartItems);
    console.log("Is in cart:", isInCart);
    useEffect(() => {
        setLoading(true);
        getProductById(id).then(data => {
            setProduct(data);
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching product:', error);
            setLoading(false);
        });
    }, [id]);
    const toggleSection = (sectionName) => {
        setOpenSection(openSection === sectionName ? null : sectionName);
    };

    const handleQuantityChange = (increment) => {
        setQuantity(prevQuantity => Math.max(1, prevQuantity + increment));
    };
    const handlePriceChange = (newPrice) => {
        setPrice(newPrice);
        setCustomPrice('');
    };

    const handleCustomPriceChange = (e) => {
        const value = e.target.value;
        setCustomPrice(value);
        setPrice(Number(value));
    };

    const toggleReadMore = () => {
        setReadMore(!readMore);
    };

    const handleAddToCart = () => {
        if (!isInCart) {
            dispatch(addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                quantity,
                imageUrl: product.imageUrl,
                cardType: product.cardType,
                brand: product.brand
            }));
            alertAddToCart();
        }else{
            alertInfo('This item is already in your cart');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!product) {
        return <div>Loading...</div>;  // Or any other placeholder content
    }
    console.log("Image URL:", product);

    return (
        <div className="product-page-container">
            <div className="breadcrumb">
                <div className="breadcrumb">Home > Fashion & Retail > Accessories > {product.title}</div>
            </div>
            <div className="product-details">

                <div className="product-image-description">
                    <h1>{product.title} - {product.brand}</h1>
                    <img src={`http://localhost:3000/${product.imageUrl}`} alt="Adidas Gift Card" className="product-image"/>
                </div>
                <div className="product-purchase">
                    <div className="price-options">
                        <h3>Digital</h3>
                        <p>Range £1.00 - £500.00</p>
                        {/*<p>Delivery Time: {product.cardType === 'Physical' ? `${product.DeliveryTimeForPhysicalCardInDays} days` : "Delivered by email within 1 working day"}</p>*/}

                        <div className="price-buttons">
                            {product.FixedDenomination.map((amount) => (
                                <button
                                    key={amount}
                                    className={`price-button ${price === amount ? 'selected' : ''}`}
                                    onClick={() => handlePriceChange(amount)}
                                >
                                    £{parseFloat(amount).toFixed(2)}
                                </button>
                            ))}
                        </div>
                        <input
                            type="number"
                            value={customPrice}
                            onChange={handleCustomPriceChange}
                            placeholder={`£ Other amount (£${product.VariableDenominationFrom} - £${product.VariableDenominationTo})`}
                            min={product.VariableDenominationFrom}
                            max={product.VariableDenominationTo}
                            className="custom-price-input"
                        />
                    </div>
                    <div className="quantity-section">
                        <button onClick={() => handleQuantityChange(-1)}>-</button>
                        <span className="quantity">{quantity}</span>
                        <button onClick={() => handleQuantityChange(1)}>+</button>
                    </div>
                    <div className="total-price">
                        You pay £{(price * quantity).toFixed(2)}
                    </div>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        {isInCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                    <p className="note">Please note that eGifts cannot be refunded or exchanged.</p>
                </div>

            </div>
            <div className="product-description">
                    <p>{product.description}</p>
            </div>
            <div className="additional-info">
                <div className="accordion" onClick={() => toggleSection('terms')}>
                    <h3>Terms & Conditions</h3>
                    <div className="accordion-content">
                        <div className="accordion-content" style={{ display: openSection === 'terms' ? 'block' : 'none' }}>
                            {product?.TermsAndConditions || "No Terms and Conditions available"}
                        </div>
                    </div>
                </div>
                <div className="accordion" onClick={() => toggleSection('redemption')}>
                    <h3>Redemption instructions</h3>
                    <div className="accordion-content">
                        <div className="accordion-content" style={{ display: openSection === 'redemption' ? 'block' : 'none' }}>
                            {product?.RedemptionInstructions || "No Redemption Instructions available"}
                        </div>
                    </div>
                </div>
                <div className="accordion" onClick={() => toggleSection('return')}>
                    <h3>Return Policy</h3>
                    <div className="accordion-content" style={{ display: openSection === 'return' ? 'block' : 'none' }}>
                        {product.ReturnPolicy}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
