import react, { useState } from 'react';
import axios, { Axios } from 'axios';
import { response } from 'express';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        axios.post('/api/auth/signup', { email, password})
        .then(response => {
            alert('User registered successfully');
        })
        .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpPage;