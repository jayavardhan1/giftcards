import React from 'react';
import '../CSS/cart.css';
import CartItems from "./CartItems/CartItems";
import { connect } from 'react-redux';
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/features/cartSlice';
import {Link} from "react-router-dom";

function Cart({ cartItems, decreaseQuantity, increaseQuantity, removeFromCart }) {

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const total = subtotal; // Simplified total calculation for this example. Consider shipping and taxes as needed.

    if (!cartItems.length) {
        return (
            <div className="wishlist-main">
                <div className="nav-url">
                    <div>Home</div>
                    <span>/</span>
                    <div>Cart</div>
                </div>
                <div className="title-wishlist">Cart</div>
                <div className="wishlist-empty-card mt-3 container">
                    <div className="wishlist-empty-text">You have no gift cards in Cart</div>
                    <Link className="wishlist-empty-btn" to="/"> <span>Shop Now</span> </Link>
                </div>
            </div>
        );
    }
    console.log("Cart received props:", {cartItems})
    return (
        <div className="">
            <div className="cart-main">
                <div className="main-left">
                    <div className="main-subtitle">Shopping Cart</div>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.imageUrl} alt={item.title}/>
                            <div className="cart-item-data">
                                <div className="heading">{item.title}</div>
                                <div className="text">${item.price}</div>
                                <div className="text">{item.cardType}</div>
                            </div>
                            <div className="add-to-cart">
                                <button
                                    style={{
                                        backgroundColor: '#F5F0E5',
                                        border:'none',
                                        borderRadius: '50%',
                                    }}
                                    onClick={() => decreaseQuantity({id: item.id, price: item.price})}>
                                    -
                                </button>
                                {item.quantity}
                                <button
                                    style={{
                                        backgroundColor: '#F5F0E5',
                                        border:'none',
                                        borderRadius: '50%',
                                    }}
                                    onClick={() => increaseQuantity({id: item.id, price: item.price})}>
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="main-right">
                    <div className="main-subtitle">Order Summary</div>
                    <div className="price-cal">
                        <div className="price-item">
                            <div className="price-header">Subtotal</div>
                            <div className="price-cost">${subtotal.toFixed(2)}</div>
                        </div>
                        <div className="price-item">
                            <div className="price-header">Shipping</div>
                            <div className="price-cost">Free</div>
                        </div>
                        <div className="price-item">
                            <div className="price-header">Taxes</div>
                            <div className="price-cost">To Be Calculated</div>
                        </div>
                        <div className="price-item">
                            <div className="price-header">Total</div>
                            <div className="price-cost">${total.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="price-footer">
                        <button className="checkout-btn btn-grn border-0">Check Out</button>

                        <button className="continue-shop-btn border-0 mt-3 "
                        style={{
                            color: '#000',
                            padding: '0.5rem 1rem',
                            borderRadius: '0.5rem',
                        }}
                        >Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: Object.values(state.cart.items), // Convert object to array for mapping
});

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
