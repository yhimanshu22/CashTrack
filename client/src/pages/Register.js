import React, { useState, useEffect } from "react";
import { Form, Input, message, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Prevent logged in users from accessing the registration page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post('/users/register', values);
      if (response.data.success) {
        message.success('Registration successful!');
        navigate('/login');
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error('An error occurred during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={onFinish}>
          <h1 className="text-5xl font-semibold mb-6 text-center text-gray-800">Register Form</h1>
          
          <Form.Item
            label="Name"
            name="name"
            className="mb-4"
          >
            <Input
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </Form.Item>
          
          <Form.Item
            label="Email"
            name="email"
           
            className="mb-4"
          >
            <Input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="himu09854@gmail.com"
            />
          </Form.Item>
          
          <Form.Item
            label="Password"
            name="password"
            
            className="mb-6"
          >
            <Input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123456"
            />
          </Form.Item>
          
          <div className="flex justify-between items-center">
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Already registered? Click here to login
            </Link>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold justify-center px-3 rounded"
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;