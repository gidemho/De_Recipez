import { useState } from 'react';
import axios from 'axios';

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // To handle errors
    const [isLoading, setIsLoading] = useState(false); // To handle loading state

    const handleSignUp = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Set loading to true while the request is being processed
        setError(null); // Reset the error state before making the request

        try {
            const response = await axios.post('/api/auth/signup', { email, password });
            alert('User registered successfully', response.data);
            setEmail('');
            setPassword('');
        } catch (error) {
            setError('Failed to register user');
            console.error(error);
        } finally {
            setIsLoading(false); // Stop loading once the request completes
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
            <form onSubmit={handleSignUp} className="flex flex-col space-y-4">
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    className="p-2 border border-gray-300 rounded"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    disabled={isLoading}
                >
                    {isLoading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
}

export default SignUpPage;
