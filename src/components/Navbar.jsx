import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <aside className="w-64 shrink-0 h-screen border-r-2 flex flex-col justify-between px-6">
      {/* Logo */}
      <div className="flex justify-center pt-4">
        <img
          className="w-20 h-20 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV47BewRvLkbyCIjvXppFyBk4spxoq5sRF9m6svqEcdg&s=10"
          alt="Logo"
        />
      </div>

      {/* Navigation links */}
      <nav className="text-2xl font-semibold">
        <h1
          onClick={() => navigate("/main")}
          className="mb-6 cursor-pointer"
        >
          Home
        </h1>

        <h1
          onClick={() => navigate("/main/products")}
          className="mb-6 cursor-pointer"
        >
          Products
        </h1>

        <h1
          onClick={() => navigate("/main/users")}
          className="mb-6 cursor-pointer"
        >
          Users
        </h1>
      </nav>

      {/* Logout */}
      <div className="pb-6">
        <button className="bg-gray-600 hover:bg-gray-400 px-4 py-2 rounded-2xl cursor-pointer">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Navbar;