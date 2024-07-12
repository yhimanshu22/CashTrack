import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import Form from "../components/Form"; // Import your custom Form component
import { openNotificationSuccess, openNotificationError } from "../components/Notification"; // Import notification functions

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const submitHandler = async (email, password, name) => {
    try {
      setLoading(true);

      const { data } = await axios.post("/users/register", { email, password, name });
      //console.log(data);

      setLoading(false);
      openNotificationSuccess('User Registered successfully'); // Use notification function
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      openNotificationError('Something went wrong'); // Use notification function
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
      {loading && <Spinner />}

      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
        <Form
          formTitle="Join CashTrack"
          submitBtn="Register"
          formType="register"
          onSubmit={submitHandler}
        />
      </div>
    </>
  );
};

export default Register;
