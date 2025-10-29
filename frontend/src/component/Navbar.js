import React from "react";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../image/ChatGPT Image Apr 3, 2025, 03_35_14 PM.png";
import Login from "../component/Login";

function Navbar() {
  return (
    <>
      <div className="flex justify-between px-6 py-3 fixed top-0 left-0 right-0 z-50 bg-gray-900 shadow-lg">
        {/* Left Section - Logo + Icon */}
        <div className="flex items-center space-x-4">
          <FiAlignJustify className="text-white h-8 w-8 hover:text-gray-400 cursor-pointer duration-300" />
          <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
          <h1 className="text-white text-2xl font-bold">MediaAMP</h1>
        </div>

        {/* Middle Section - Nav Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:text-gray-400 duration-300"
          >
            Home
          </Link>

          <Link
            to="/add"
            className="text-white text-lg font-semibold hover:text-gray-400 duration-300"
          >
            Add New
          </Link>

          <Link
            to="/about"
            className="text-white text-lg font-semibold hover:text-gray-400 duration-300"
          >
            About
          </Link>
        </div>

        {/* Right Section - Login Button */}
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-md font-semibold hover:bg-white hover:text-black duration-300"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
          <Login />
        </div>
      </div>
    </>
  );
}

export default Navbar;
