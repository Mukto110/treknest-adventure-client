import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100 shadow-sm">
      {" "}
      <div className="container mx-auto flex items-center justify-between py-4">
        {" "}
        <Link to="/" className="text-xl font-bold">
          TrekNest
        </Link>
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/tourist-spots" className="hover:text-primary">
            All Tourist Spots
          </Link>
          <Link to="/add-tourist-spot" className="hover:text-primary">
            Add Tourist Spot
          </Link>
          <Link to="/my-list" className="hover:text-primary">
            My List
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="btn btn-outline btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-primary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
