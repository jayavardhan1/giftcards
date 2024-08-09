import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from "../../redux/features/cartSlice";
import { useNavigate} from 'react-router-dom';

const GiftCard2 = ({ product, addToCart }) => {
    const navigate = useNavigate();
    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };
    const discountValue = parseInt(product.discount.replace('% OFF', ''), 10);
    const backgroundColor = discountValue > 10 ? 'purple' : 'red';

    return(
    <div className="col-6 col-md-4 col-lg-3 mb-3 " onClick={()=>{handleProductClick(product.id)}}>
        <div className="card card-insideProductList h-100 borderless-card">
            <div className="discount-label"
            style={{
                backgroundColor: backgroundColor,
            }}
            >{product.discount}</div>
            <img className="card-img-top" src={product.imageUrl} alt={product.title}/>
            <div className="card-body">
                <h5 className="card-title">{product.brand}</h5>
                <div className="card-title">{product.price}</div>
                <div className="card-description">{product.description}</div>
            </div>
        </div>
    </div>
);
};
const mapDispatchToProps = {
    addToCart,
};

export default connect(null, mapDispatchToProps)(GiftCard2);
