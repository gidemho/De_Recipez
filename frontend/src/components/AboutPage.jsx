import React from 'react';

function AboutPage() {
    return (
        <div>
            <header className="bg-white shadow-md p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">De_Recipez</h1>
                    <nav className="space-x-4">
                        <a href="/" className="text-blue-500 hover:text-blue-700">Home</a>
                        <a href="/about" className="text-blue-500 hover:text-blue-700">About</a>
                        <a href="/recipes" className="text-blue-500 hover:text-blue-700">Recipes</a>
                        <a href="/contact" className="text-blue-500 hover:text-blue-700">Contact</a>
                    </nav>
                </div>
            </header>

            <section className="max-w-4xl mx-auto p-8">
                <h2 className="text-4xl font-bold text-center mb-6">About Us</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to <strong>De_Recipez</strong>, a platform created to inspire culinary enthusiasts from all walks of life. Our mission is to foster a community where people can discover, share, and enjoy recipes from around the world. Whether you're a professional chef or a home cook, De_Recipez provides you with the tools to explore and contribute to a vast collection of recipes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Our platform is built with simplicity and user-friendliness in mind. With De_Recipez, you can:
                </p>
                <ul className="list-disc pl-5 text-lg text-gray-700 mb-6">
                    <li>Browse and discover new recipes</li>
                    <li>Create and share your own culinary masterpieces</li>
                    <li>Search for specific recipes based on ingredients or categories</li>
                    <li>Connect with fellow food lovers and share your cooking experiences</li>
                </ul>
                <p className="text-lg text-gray-700">
                    Our team is passionate about food and technology, and we are committed to continually improving our platform. We hope you enjoy using De_Recipez as much as we enjoyed creating it!
                </p>
            </section>

            <footer className="bg-gray-100 text-center p-4 mt-8">
                <p className="text-gray-600">© 2024 De_Recipez. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutPage;