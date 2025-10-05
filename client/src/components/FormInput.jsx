import React from "react";

const FormInput = () => {
  return (
    <div>
      <label
        htmlFor="input"
        className="block text-sm font-medium text-gray-700"
      >
        Input Label
      </label>
      <input
        id="input"
        type="text"
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
      />
    </div>
  );
};

export default FormInput;
