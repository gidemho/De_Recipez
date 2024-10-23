# De_Recipez
Recipe_Sharing-Platform

De_Recipez is a modern recipe-sharing platform built with a focus on user experience and simplicity. Users can view, add, update, and delete recipes while interacting with a clean, responsive interface. 
Additionally, users can sign up, log in, and reset their passwords for full control of their accounts. 
The platform also includes a search feature to find specific recipes efficiently.

Features
View Recipes: Browse a variety of recipes shared by users.
Add New Recipes: Registered users can submit their own recipes to share with the community.
Update/Delete Recipes: Manage your own recipe entries, making edits or removing them as necessary.
Authentication: Secure user authentication system with:
User registration
Login and logout
Password reset functionality
Recipe Search: Easily search for specific recipes by name or ingredient.
Responsive Design: Tailored for mobile, tablet, and desktop devices using Tailwind CSS.
Project Structure
The project a full-stack application with both Frontend and Backend components:

1. Backend:
Node.js,
Express,
MongoDB
The backend serves as the API for handling all server-side logic, including authentication, recipe management, and database interactions.

Key Technologies:
Node.js & Express: Backend server and REST API.
MongoDB: Database for storing users, recipes, and session data.
Mongoose: ODM for interacting with MongoDB.
JWT: JSON Web Tokens for authentication and session management.
bcrypt: For password hashing.
API Endpoints:
Authentication:
auth/signup – User registration
authlogin – User login
auth/reset-password – Password reset
Recipes:
/api/recipes – Get all recipes
/api/recipes/:id – Get a single recipe, update, or delete it
/api/recipes – Create a new recipe
Search:
/api/recipes/search – Search for recipes by name or ingredients


2. Frontend:
React,
Tailwind CSS
The frontend is built with React and Tailwind CSS, providing a modern, responsive user interface.
Users can navigate between different pages like viewing recipes, signing up, logging in, and searching for recipes.

Key Technologies:
React: For building dynamic, single-page UI components.
Tailwind CSS: For styling and creating a responsive, mobile-friendly layout.
Axios: For making API requests to the backend.
React Router: For managing page navigation.
