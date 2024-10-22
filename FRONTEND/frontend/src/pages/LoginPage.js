import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [paaword, setPassword] = useState('');
    const navigate = useNavigate('');

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('/api/auth/login', { email, password })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            navigate('/');
        })
        .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Login</h2>
            <from onSubmit={handleLogin}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </from>
        </div>
    );
}

export default LoginPage;