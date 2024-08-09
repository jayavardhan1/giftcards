import {Link} from "react-router-dom";
import React from "react";

const Banner = ({ text }) => {
    return (
        <div className="container-fluid p-0">
            <Link  to="/ProductListing" className="banner d-flex justify-content-center align-items-center position-relative">
                <img
                    src='mobilebanner.png'
                    alt="Banner Image"
                    className="img-fluid cropped-image"
                    style={{width: '100%', height: '100%', borderRadius: '0.5rem'}}
                />
                <div className="banner-text text-white text-center position-absolute">
                    <h1 className="display-4 fw-bold">{text}</h1>
                </div>
            </Link>
        </div>
    );
};

export default Banner;
