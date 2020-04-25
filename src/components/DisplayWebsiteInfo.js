import React from "react";

export default function ({ prompt }) {
  return (
    <div className=" text-center max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg mb-8 shadow-xl">
      <div className="flex justify-center text-center ml-6 pt-1">
        <h1 className="text-center text-2xl text-blue-700 leading-tight">
          {prompt}
        </h1>
      </div>
    </div>
  );
}