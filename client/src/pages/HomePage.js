import React from "react";
import Layout from "../components/Layout/Layout";
import './HomePage.css'

const HomePage = () => {
  return (
    <Layout>
      <div className="homepage-container">
        <h1>Welcome to Expense Tracker</h1>
        <p>Track your expenses efficiently and manage your finances better.</p>
        
        <div className="features">
          <div className="feature">
            <h2>Track Expenses</h2>
            <p>Easily log and categorize your expenses.</p>
          </div>
          <div className="feature">
            <h2>Generate Reports</h2>
            <p>Get detailed reports on your spending habits.</p>
          </div>
          <div className="feature">
            <h2>Set Budgets</h2>
            <p>Set monthly budgets to control your spending.</p>
          </div>
        </div>
        
        <div className="call-to-action">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
