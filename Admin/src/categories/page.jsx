import React from "react";
import { Outlet,useLocation } from "react-router-dom";

const Categories = () => {
  const location = useLocation();
  return (
    <main className="space-y-6 pt-7">
      {location.pathname === "/products" && (
        <h1 className="font-semibold">Categories</h1>
      )}
      <Outlet />
    </main>
  );
};

export default Categories;
