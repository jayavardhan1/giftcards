import React, { useState } from 'react';
import './MenuDisplay.css';

const MenuDisplay = () => {
    const [activeMenu, setActiveMenu] = useState('categories');

    const categories = {
        "CLOTHING": ["Jackets & Coats", "Jeans", "Shirts"],
        "FOOTWEAR": ["Casual Shoes", "Flip-Flops & Slippers", "Formal Shoes"],
        "ACCESSORIES": ["Backpacks", "Bags & Wallets", "Belts"],
        "JEWELLERY": ["Gold And Silver Coins", "Gold And Diamond Jewellery", "Silver Jewellery"],
        // "CLOTHING2": ["Jackets & Coats", "Jeans", "Shirts"],
        // "FOOTWEAR2": ["Casual Shoes", "Flip-Flops & Slippers", "Formal Shoes"],
    };

    const brands = {
        "AJIO GOLD BRANDS": ["Superdry", "Scotch & Soda", "GAP"],
        "INTERNATIONAL BRANDS": ["French Connection", "TOM TAILOR", "New Balance"],
        "FOOTWEAR": ["Adidas", "Campus", "Crocs"],
        "WESTERN ": ["THE INDIAN GARAGE CO", "US Polo Assn", "LEVIS"],
        // "WESTERN WEAR2": ["THE INDIAN GARAGE CO", "US Polo Assn", "LEVIS"],
        // "WESTERN WEAR3": ["THE INDIAN GARAGE CO", "US Polo Assn", "LEVIS"]


    };

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const displayItems = (items) => {
        return (
            Object.entries(items).map(([key, values]) => (
                <div key={key} className="column">
                    <h4>{key}</h4>
                    {values.map(value => <p key={value}>{value}</p>)}
                </div>
            ))
        );
    };

    return (
        <div className="menu-display">
            <div className="menu-tabs">
                <span onMouseEnter={() => handleMouseEnter('categories')}>CATEGORIES</span>
                <span onMouseEnter={() => handleMouseEnter('brands')}>BRANDS</span>
            </div>
            <div className="menu-content">
                {activeMenu === 'categories' ? displayItems(categories) : displayItems(brands)}
            </div>
        </div>
    );
};

export default MenuDisplay;
