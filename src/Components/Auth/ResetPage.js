import React, { useState } from 'react';
import './ResetPage.css'; // Make sure to create and style this CSS file

const ResetPage = () => {
    const [email, setEmail] = useState('');

    const handleReset = (event) => {
        event.preventDefault();
        // Add your password reset logic here
        console.log('Reset password for:', { email });
    };

    return (
        <div className="reset-container">
            <form className="reset-form" onSubmit={handleReset}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-reset">Reset Password</button>
            </form>
            <div className="back-to-login">
                <a href="/login">Back to Login</a>
            </div>
        </div>
    );
};

export default ResetPage;
