import React, { useState } from 'react';
import './QuickLinks.css';
import Footer from "../Footer/Footer"; // Ensure you have the corresponding CSS file

const QuickLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const quickLinksData = [
        { id: 1, image: 'extras.png', label: 'Link 1' },
        { id: 2, image: 'one4all.png', label: 'Link 2' },
        // { id: 3, image: 'cycle.png', label: 'Link 3' },
        // { id: 4, image: 'link4.jpg', label: 'Link 4' },
    ];

    return (
        <div className="quick-links-container">
            <button onClick={toggleOpen} className="quick-link-toggle">
                {isOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/>
                    </svg>
                }
            </button>

            {isOpen && (
                <div className="links">
                    {quickLinksData.map((link) => (
                        <button key={link.id} className="quick-link">
                            <img src={link.image} alt={link.label} className="quick-link-image"/>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
export default QuickLinks;
