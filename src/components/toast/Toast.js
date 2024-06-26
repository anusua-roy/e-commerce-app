import React from "react";

const Toast = ({ message, type, isVisible, onClose }) => {
  if (!isVisible) return null;

  const typeStyles = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-xs w-full shadow-lg rounded-md ${typeStyles[type]}`}
    >
      <div className="flex justify-between items-center p-4 text-white">
        <div>{message}</div>
        <button onClick={onClose} className="text-white ml-4">
          ✖
        </button>
      </div>
    </div>
  );
};

export default Toast;
