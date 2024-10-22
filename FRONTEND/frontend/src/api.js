import axios from 'axios';

cost API = axios.create({
    baseURL: 'http://localhost:5173/api',
});

export const fetchRecipes = () => API.get('/recipes');
export const login = (email, password) => API.post('/auth/login', { email, password });
export const login = (email, password) => API.post('/auth/signup', { email, password });