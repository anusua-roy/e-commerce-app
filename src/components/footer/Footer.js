import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <h5 className="font-bold mb-2">YourStore</h5>
          <div className="flex justify-center space-x-4">
            <button className="text-gray-400 hover:text-white focus:outline-none">
              About Us
            </button>
            <button className="text-gray-400 hover:text-white focus:outline-none">
              Contact
            </button>
            <button className="text-gray-400 hover:text-white focus:outline-none">
              Privacy Policy
            </button>
          </div>
        </div>
        <div className="text-gray-400">
          &copy; {new Date().getFullYear()} YourStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
