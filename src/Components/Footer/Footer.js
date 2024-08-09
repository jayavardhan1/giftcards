import React, {useEffect, useState} from 'react';
import './Footer.css';
import {getQuickLinks} from "../../service/Api"; // Import the CSS file
const Footer = () => {
    const [quickLinks, setQuickLinks] = useState([]);

    useEffect(() => {
        getQuickLinks().then((response) => {
            console.log("Quick Links:", response);
            setQuickLinks(response);
        }).catch(error => {
            console.error('Error fetching quick links:', error);
        });
    }, []);
    return (
        <>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {quickLinks.map(link => (
                <div className="link-container" key={link.id}>
                    <img src={`${process.env.PUBLIC_URL}/${link.icon}`} alt={link.title} className="link-icon"/>
                    <div className="link-title">{link.title}</div>
                    <div className="link-description">{link.description}</div>
                </div>
            ))}
        </div>
            <div className="footer-lower-section">
                <div className="row footer-row">
                    <div className="col-3 footer-lower-title">Legal</div>
                    <div className="col footer-lower-description">About us, Privacy, Policy, Cookie Preferences</div>
                </div>
                <div className="row footer-row">
                    <div className="col-3 footer-lower-title">Support</div>
                    <div className="col footer-lower-description">FAQs, Terms & Conditions, Contact us</div>
                </div>
                <div className="row footer-row">
                    <div className="col-3 footer-lower-title">Copyright</div>
                    <div className="col footer-lower-description">Site and contents copyright BHN | 2024</div>
                </div>
            </div>


        </>
    );
};

export default Footer;
