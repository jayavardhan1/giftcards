import React, { useState } from 'react';
import './PersonalDetails.css'; // Make sure to create and style this CSS file

const PersonalDetails = () => {
    const [details, setDetails] = useState({
        name: 'Balaji Jangam',
        email: 'balaji.jangam@bhnetwork.com',
        phoneNumber: '',
        dob: '03/08',
        password: '********',
    });

    const handleEdit = (field) => {
        const newValue = prompt(`Edit ${field}:`, details[field]);
        if (newValue !== null) {
            setDetails({ ...details, [field]: newValue });
        }
    };

    return (
        <div className="personal-details-container">
            <div className="personal-details-item">
                <div className="personal-details-label">Name:</div>
                <div className="personal-details-value">{details.name}</div>
                <button className="edit-button" onClick={() => handleEdit('name')}>Edit</button>
            </div>
            <div className="personal-details-item">
                <div className="personal-details-label">Email:</div>
                <div className="personal-details-value">{details.email}</div>
                <button className="edit-button" onClick={() => handleEdit('email')}>Edit</button>
            </div>
            <div className="personal-details-item">
                <div className="personal-details-label">Phone Number:</div>
                <div className="personal-details-value">{details.phoneNumber}</div>
                <button className="edit-button" onClick={() => handleEdit('phoneNumber')}>Edit</button>
            </div>
            <div className="personal-details-item">
                <div className="personal-details-label">Date of Birth (DD/MM):</div>
                <div className="personal-details-value">{details.dob}</div>
                <button className="edit-button" onClick={() => handleEdit('dob')}>Edit</button>
            </div>
            <div className="personal-details-item">
                <div className="personal-details-label">Password:</div>
                <div className="personal-details-value">{details.password}</div>
                <button className="edit-button" onClick={() => handleEdit('password')}>Edit</button>
            </div>
        </div>
    );
};

export default PersonalDetails;
