import React, { useState } from 'react';
import './ChangePassword.css'; // Make sure to create and style this CSS file

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = (event) => {
        event.preventDefault();
        console.log('Changing password with:', { currentPassword, newPassword, confirmNewPassword });
    };

    return (
        <div className="change-password-container">
            <form className="change-password-form" onSubmit={handleChangePassword}>
                <div className="form-group">
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                        type="password"
                        id="currentPassword"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmNewPassword">Confirm New Password</label>
                    <input
                        type="password"
                        id="confirmNewPassword"
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-change-password">Change Password</button>
            </form>
            <div className="password-requirements">
                <h4>Password requirements:</h4>
                <ul>
                    <li>Your password must be at least 8 characters</li>
                    <li>Passwords need to meet complexity rules so contain 3 of the following 4 categories:
                        <ul>
                            <li>Uppercase characters A-Z</li>
                            <li>Lowercase characters a-z</li>
                            <li>Digits 0-9</li>
                            <li>Special characters (!, $, #, %, etc.)</li>
                        </ul>
                    </li>
                    <li>If resetting an existing password, you cannot repeat a password previously used</li>
                </ul>
                <h4>Password guidelines:</h4>
                <ul>
                    <li>We recommend using a password manager to generate and manage your passwords for this website.</li>
                    <li>If a password manager is not available, consider using a long phrase that is meaningful to you, it should also include special characters.</li>
                </ul>
            </div>
        </div>
    );
};

export default ChangePassword;
