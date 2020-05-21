import React from "react";

export default function ({ handleChange, handleClick }) {
  return (
    <span
      style={{ width: "40vw", margin: "20px" }}
      className="flex   items-center border-b border-b-2 border-gray-500 py-1 animate__animated animate__fadeInDown"
    >
      <input
        onChange={handleChange}
        onKeyDown={(e) => {
          handleEnter(e, handleClick);
        }}
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

let handleEnter = (e, handleClick) => {
  if (e.key === "Enter") {
    handleClick();
  }
};
