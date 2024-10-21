import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPages';
import SignUpPage from './pages/SignUPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                 <Route path="/reset-paaword" element={<ResetPasswordPage />} />
            </Routes>
        </div>
    );
}

export default App;
