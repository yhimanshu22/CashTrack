import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 dark:border-blue-400 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;


