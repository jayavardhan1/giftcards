import React, {useEffect, useState} from "react";
import {getMyRewards, getTopProducts} from "../../service/Api";
export default function MyRewards() {
    const [myRewards, setMyRewards] = useState([]);

    useEffect(() => {
        getMyRewards().then(rewards => setMyRewards(rewards));
    }, []);
    return(
            <div className="container mt-4">
                <div className="row justify-content-center ">
                    {myRewards.map(product => (
                        <div key={product.id} className="col-md-4 col-sm-6 col-xs-12 mb-4 ">
                            <div className="card h-100 border-0">
                                <img src={product.imageUrl} className="card-img-top" alt="reward image"/>
                                <div className="card-body">
                                    <h5 className="card-title">{product.brand}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}
