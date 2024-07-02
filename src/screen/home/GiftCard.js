import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from "../../../redux/features/cartSlice";
const GiftCard = ({ card, addToCart,onClick }) => (
    <div className="col-6 col-md-3 col-lg-2 " onClick={onClick}>
        <div className="card h-100 borderless-card">
            <img className="card-img-top" src={card.imageUrl} alt={card.title}/>
            <div className="card-body">
                <h5 className="card-title">{card.brand}</h5>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = {
    addToCart,
};

export default connect(null, mapDispatchToProps)(GiftCard);
