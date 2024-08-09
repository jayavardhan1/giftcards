import React, { useState } from 'react';
import './Popup.css'; // Create this CSS file for styling the popup

const Popup = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    return (
        <div className="popup-container">
            <button onMouseOver={togglePopup}>Toggle Popup</button>
            {isPopupVisible && (
                <div className="popup">
                    <h2>Popup Content</h2>
                    <p>This is the content of the popup.</p>
                    <button onMouseLeave={togglePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Popup;
