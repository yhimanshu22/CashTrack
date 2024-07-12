
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import Form from "../components/Form"; // Import your custom Form component
import { toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const submitHandler = async (email, password) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", { email, password });
      setLoading(false);
      toast.success("Login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  // Redirect logged-in users
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="login-page">
        {loading && <Spinner />}

        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
          <Form
            formTitle="Login Form"
            submitBtn="Login"
            formType="login"
            onSubmit={submitHandler}
          />
        
        </div>
      </div>
    </>
  );
};

export default Login;
