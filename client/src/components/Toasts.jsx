import React from "react";

const Toasts = () => {
  return (
    <div>
      <div className="fixed bottom-4 right-4">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <p>This is a toast message!</p>
        </div>
      </div>
    </div>
  );
};

export default Toasts;
