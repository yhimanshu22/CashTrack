import React, { useState } from "react";
import InputType from "./InputType"; // Adjust path if necessary
import { Link } from "react-router-dom";

const Form = ({ formType, submitBtn, formTitle, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if onSubmit is a function
    if (typeof onSubmit === "function") {
      if (formType === "login") {
        onSubmit(email, password);
      } else if (formType === "register") {
        onSubmit(name, email, password);
      }
    } else {
      console.error("onSubmit is not a function");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <form onSubmit={handleFormSubmit}>
        <h1 className="text-2xl font-bold text-black text-center mb-4">{formTitle}</h1>
        
        {formType === "register" ? (
          <>
            <InputType
              labelText="Email"
              labelFor="forEmail"
              inputType="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputType
              labelText="Password"
              labelFor="forPassword"
              inputType="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <InputType
              labelText="Name"
              labelFor="forName"
              inputType="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputType
              labelText="Email"
              labelFor="forEmail"
              inputType="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputType
              labelText="Password"
              labelFor="forPassword"
              inputType="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}
        <div className="flex md:flex-row md:justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            {formType === "login" ? (
              <div className="mt-4 ml-3">
                <p className="text-gray-700 text-lg dark:text-gray-600 text-center md:text-left">
                  Not registered yet?{" "}
                  <Link to="/register" className="text-lg text-blue-500 hover:underline font-medium">
                    Register here!
                  </Link>
                </p>
              </div>
            ) : (
              <div className="flex justify-center mt-4 ml-3">
                <p className="text-gray-400 text-lg dark:text-gray-600 text-center md:text-left">
                  Already a user?{" "}
                  <Link to="/login" className="text-blue-500 text-lg hover:underline ml-1 font-medium">
                    Login here!
                  </Link>
                </p>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 ml-4 px-6 rounded-full mt-0.5 focus:outline-none transition-colors duration-300"
          >
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
