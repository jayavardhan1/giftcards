import React, { useState } from 'react';
import './LoginPage.css';
import {login} from "../../service/AuthAPi";
import {setError} from "../../redux/features/userSlice"; // Make sure to create and style this CSS file

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await login(username, password);
            console.log('Logged in user:', user);
            // Handle successful login (e.g., save user info, redirect, etc.)
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group remember-me">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label htmlFor="rememberMe">Remember me?</label>
                </div>
                <button type="submit" className="btn btn-login">Log in</button>
            </form>
            <div className="password-links">
                <a href="/change-password">Change my password</a> / <a href="/forgot-password">Forgot password</a>
            </div>
        </div>
    );
};

export default LoginPage;
