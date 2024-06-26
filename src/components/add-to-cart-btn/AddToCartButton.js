import React, { useContext } from "react";
import { AppContext } from "../../App";

const AddToCartButton = ({ isListPage, product }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <div className={`flex items-center ${isListPage ? "self-center" : ""}`}>
      <button
        onClick={() => {
          addToCart(product);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
