import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, handleDecrease, deleteFromCart } =
    useContext(AppContext);
  const totalPrice = Object.values(cartItems ?? []).reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        {Object.values(cartItems ?? []).length > 0 ? (
          <div>
            {Object.values(cartItems ?? []).map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4"
              >
                <div className="flex items-center">
                  <Link to={`/products/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-md mr-4"
                    />
                  </Link>
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-500">₹{item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="px-4">{item.count}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => deleteFromCart(item)}
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 ml-4"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    ₹{item.price * item.count}
                  </p>
                </div>
              </div>
            ))}
            <div className="text-right mt-6">
              <h2 className="text-2xl font-bold">Total: ₹{totalPrice}</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-4">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
