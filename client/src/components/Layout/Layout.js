import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
        {children}
      </main>
    </>
  );
};

export default Layout;
