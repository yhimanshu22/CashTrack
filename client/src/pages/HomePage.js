import React from "react";
import Layout from "../components/Layout/Layout";
import Carousel from "../components/Corousel"; // Import the Carousel component

const HomePage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
            Welcome to Expense Tracker
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Track your expenses efficiently and manage your finances better.
          </p>
          
          <Carousel />

          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
