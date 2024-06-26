import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="text-white text-2xl">Loading...</div>
    </div>
  );
};

export default Loading;
