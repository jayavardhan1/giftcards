import cartitem from './cartitems.css';
import { connect } from 'react-redux';
import {Link} from "react-router-dom";
import {decreaseQuantity, increaseQuantity, removeFromCart} from "../../redux/features/cartSlice";
function CartItems(cartItems) {
    console.log("CartItems received props:", { cartItems }); // Debugging statement

    if(cartItems.cartItems.length===0){
        return (
            <div className="wishlist-main">
                <div className="wishlist-empty-card ">
                    <div className="wishlist-empty-text ">No Items in Cart</div>
                    <Link className="wishlist-empty-btn" to='/'> <span>Shop Now</span> </Link>
                </div>
            </div>
        )
    }
    return (
        <>
            {cartItems.cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                    <img src={item.imageUrl} alt={item.title}/>
                    <div className="cart-item-data">
                        <div className="heading">{item.title}</div>
                        <div className="text">${item.price}</div>
                        <div className="text">{item.cardType}</div>
                    </div>
                    <div className="add-to-cart" >
                    <svg onClick={() => decreaseQuantity(item.id)}   width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="28" height="28" rx="14" fill="#F5F0E6"/>
                        <path d="M16.723 15.492V17.076H11.267V15.492H16.723Z" fill="#1C170D"/>
                    </svg>
                    {/*quantity*/}
                        {item.quantity}
                    <svg onClick={() => increaseQuantity(item.id)} width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="28" height="28" rx="14" fill="#F5F0E6"/>
                        <path
                            d="M14.7481 11.348V19.444H13.2601V11.348H14.7481ZM17.9321 14.676V16.1H10.0601V14.676H17.9321Z"
                            fill="#1C170D"/>
                    </svg>
                </div>
            </div>
        ))}
    </>
)
}
const mapStateToProps = (state) => ({
    cartItems: state.cart.items, // Map state.cart.items to props.cartItems
});
const mapDispatchToProps = {
    increaseQuantity, // Map increaseQuantity action to props.increaseQuantity
    decreaseQuantity, // Map decreaseQuantity action to props.decreaseQuantity
    removeFromCart, // Map removeFromCart action to props.removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
