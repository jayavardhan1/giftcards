import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getBrands} from "../service/Api";

const Brands = () => {
    const navigate = useNavigate(); // Using useNavigate instead of useHistory
    const [brands, setBrands] = useState([]);
    const fetchBrands = async () => {
        const brands =  getBrands();
        setBrands(await brands);
    }
    useEffect(() => {
        fetchBrands();
    },[]);

    const handleBrandClick = (brand) => {
        navigate(`/ProductListing?brand=${brand}`); // Navigate and pass the brand as a query parameter
    };
    return (
        <div className="container">
            <div className="row">
                {brands.map((brand, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3 col-xl-2" onClick={() => handleBrandClick(brand)}>
                        <div className="category p-2 my-1 text-center">{brand}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Brands;
