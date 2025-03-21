import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(64); // Default height in px

  useEffect(() => {
    const nav = document.getElementById("navbar");
    if (nav) {
      setNavHeight(nav.offsetHeight);
    }
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        id="navbar"
        className="w-full bg-white shadow-md fixed top-0 left-0 z-50"
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800">
            TrekNest
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link to="/tourist-spots" className="hover:text-blue-600">
              All Tourist Spots
            </Link>
            <Link to="/add-tourist-spot" className="hover:text-blue-600">
              Add Tourist Spot
            </Link>
            <Link to="/my-list" className="hover:text-blue-600">
              My List
            </Link>
          </nav>

          {/* Authentication Buttons (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Page content wrapper to push content below the navbar */}
      <div style={{ paddingTop: `${navHeight}px` }}></div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center mt-16 space-y-6 text-gray-800 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/tourist-spots"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            All Tourist Spots
          </Link>
          <Link
            to="/add-tourist-spot"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Add Tourist Spot
          </Link>
          <Link
            to="/my-list"
            className="hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            My List
          </Link>

          {/* Authentication Buttons */}
          <div className="flex flex-col w-full px-6 space-y-3">
            <Link
              to="/login"
              className="block text-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
