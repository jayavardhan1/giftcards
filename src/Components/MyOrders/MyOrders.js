
import {useEffect, useState} from "react";
import {getMyOrders} from "../../service/Api";
export default function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getMyOrders();
            setOrders(data);
        };

        fetchOrders();
    }, []);
    return (
        <div className="container mt-2">
            <h1 className="mb-4">My Orders</h1>
            <div className="list-group" >
                {orders.map(order => (
                    <div key={order.id} className="list-group-item d-flex justify-content-between align-items-center border-0">
                        <div className="d-flex align-items-center">
                            <img
                                src={order.imageUrl}
                                alt={order.title}
                                className="img-thumbnail mr-3"
                                style={{width: '150px', height: '150px',border:'none',marginRight:'20px'}}
                            />
                            <div>
                                <h5>Order #{order.id}</h5>
                                <p className="mb-0">{order.description}</p>
                            </div>
                        </div>
                        <span className="badge badge-primary badge-pill">${order.price}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
