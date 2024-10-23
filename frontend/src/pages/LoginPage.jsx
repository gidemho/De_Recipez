import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/auth/login', { email, password })
            .then(response => {
                console.log(response)
                localStorage.setItem('token', response.data.token);
                toast.success('Login successful!', response.data);
                // setTimeout(() => {
                //     navigate('/recipes')
                // }, 10000)
            })

            .catch(error => {
                toast.error('Login failed. Please check your credentials.');
                console.error(error);
            });
    };

    return (
        <>
            <Header />
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-400 transition duration-300"
                            onClick={handleLogin}
                        >
                            Login
                        </button>


                    </form>
                    <Link to="/signup" className='text-center py-10 mx-36'>New user? </Link>
                </div>


                <ToastContainer position="top-right" autoClose={5000} />
            </div>
        </>
    );
}

export default LoginPage;
