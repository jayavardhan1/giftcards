import wishList from './wishlist.css';
import {Link} from "react-router-dom";

export default function WishList() {
    return  (
        <div className="wishlist-main">
            <div className="nav-url">
                <div >Home</div> <span>/</span>
                <div >WishList</div>
            </div>
            <div className="title-wishlist">WishList</div>
            <div className="wishlist-empty-card mt-3">
                <div className="wishlist-empty-text">You have no gift cards saved</div>
                <Link className="wishlist-empty-btn"> <span>Shop Now</span> </Link>
            </div>
        </div>
    );
}
