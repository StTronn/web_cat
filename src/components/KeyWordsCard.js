import React from "react";
import KeyWord from "./KeyWord";

export default function () {
  return (
    <div className="inline-block min-w-full max-w-sm rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Key Words</div>
      </div>
      <div className="px-6 py-4">
        <KeyWord word="search" />
      </div>
    </div>
  );
}
