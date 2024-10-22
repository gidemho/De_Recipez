
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Recipes from './pages/Recipes';
// import ResetPasswordPage from './pages/ResetPasswordPage';

function App() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                 {/* <Route path="/reset-paaword" element={<ResetPasswordPage />} /> */}
                <Route path="/recipes" element={<Recipes/>}/>

            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
