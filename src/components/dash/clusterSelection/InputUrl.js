import React from "react";

export default function ({ handleChange, handleClick }) {
  return (
    <span className="flex w-full  items-center border-b border-b-2 border-gray-500 py-1 ">
      <input
        onChange={handleChange}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="https://www.google.com/"
        aria-label="url"
      />
      <button
        onClick={handleClick}
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        Search
      </button>
    </span>
  );
}
