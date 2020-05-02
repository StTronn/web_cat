import React from "react";

export default function ({ handleChange, handleClick }) {
  return (
    <span className="flex w-full  items-center border-b border-b-2 border-teal-500 py-1 ">
      <input
        onChange={handleChange}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="https://www.google.com/"
        aria-label="url"
      />
      <button
        onClick={handleClick}
        className="flex-shrink-0 bg-gray-800 hover:bg-gray-900 border-gray-800 hover:border-gray-900 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        Search
      </button>
    </span>
  );
}
