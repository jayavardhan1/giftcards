import cartitem from './cartitems.css';
export default function CartItems() {
    const cartItems = [
        {
            id: 1,
            title: "Starbucks Gift Card",
            price: 50.0,
            cardType: "eGift Card",
            imageUrl: "starbucks.png"
        },
        {
            id: 2,
            title: "Target Gift Card",
            price: 50.0,
            cardType: "eGift Card",
            imageUrl: "starbucks.png"
        },
        {
            id: 3,
            title: "Starbucks Gift Card",
            price: 50.0,
            cardType: "eGift Card",
            imageUrl: "starbucks.png"
        },
        {
            id: 3,
            title: "Starbucks Gift Card",
            price: 50.0,
            cardType: "eGift Card",
            imageUrl: "starbucks.png"
        },
        {
            id: 4,
            title: "Target Gift Card",
            price: 50.0,
            cardType: "eGift Card",
            imageUrl: "starbucks.png"
        },
        {
            id: 5,
            title: "Starbucks Gift Card",
            price: 50.0,
            cardType: "eGift Card",
            imageUrl: "starbucks.png"
        },
        // Add more items as needed
    ];
    return (
    <>
        {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
                <img src={item.imageUrl} alt={item.title}/>
                <div className="cart-item-data">
                    <div className="heading">{item.title}</div>
                    <div className="text">${item.price}</div>
                    <div className="text">{item.cardType}</div>
                </div>
                <div className="add-to-cart">
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="28" height="28" rx="14" fill="#F5F0E6"/>
                        <path d="M16.723 15.492V17.076H11.267V15.492H16.723Z" fill="#1C170D"/>
                    </svg>
                    <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.02925 18.5V11.252C8.02925 11.0387 8.02925 10.82 8.02925 10.596C8.03992 10.3613 8.05058 10.116 8.06125 9.86C7.69858 10.212 7.28258 10.516 6.81325 10.772C6.35458 11.0173 5.87992 11.1933 5.38925 11.3L5.06925 9.812C5.29325 9.78 5.55458 9.70533 5.85325 9.588C6.15192 9.47067 6.46125 9.32133 6.78125 9.14C7.10125 8.95867 7.39458 8.76667 7.66125 8.564C7.92792 8.35067 8.13592 8.14267 8.28525 7.94H9.72525V18.5H8.02925Z"
                            fill="#1C170D"/>
                    </svg>
                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
