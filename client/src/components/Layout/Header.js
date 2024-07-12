import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // Using toast for notifications instead of antd's message

const Header = () => {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    toast.success("Logout Successfully");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          CashTrack
        </Link>
        <div className="flex items-center space-x-4">
          {loginUser && (
            <p className="text-lg">{loginUser.name}</p>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
