import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const NavBar = () => {
  const { countCart } = useContext(AppContext);
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          YourStore
        </Link>

        {/* Navigation links */}
        <div className="space-x-4">
          {/* <Link to="/products" className="hover:text-gray-300">
            All Products
          </Link> */}
          <Link to="/categories" className="hover:text-gray-300">
            Categories
          </Link>
        </div>

        {/* Cart icon */}
        <div>
          <Link to="/cart" className="relative text-gray-300 hover:text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19c0 1.656 1.344 3 3 3s3-1.344 3-3M3 3h2.5l3.574 11.844A2 2 0 0 0 10.97 17H19a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6.37"
              ></path>
            </svg>
            {/* Example of showing item count in the cart */}
            <span className="absolute top-0 left-0 bg-red-500 rounded-full px-2 py-1 text-xs font-bold">
              {countCart}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
