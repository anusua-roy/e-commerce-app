import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

const AddToCartButton = ({ isListPage, product }) => {
  const { addToCart } = useContext(AppContext);

  const [onClicked, setOnClicked] = useState(false);

  return (
    <div className={`flex items-center ${isListPage ? "self-center" : ""}`}>
      <button
        disabled={onClicked}
        onClick={() => {
          setOnClicked(true);
          addToCart(product);
          setTimeout(() => {
            setOnClicked(false);
          }, 2000);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
