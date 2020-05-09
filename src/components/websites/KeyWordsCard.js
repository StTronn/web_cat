import React from "react";
import KeyWord from "./KeyWord";

export default function ({ keywords }) {
  console.log(keywords);
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg mx-4 my-6 ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Key Words</div>
      </div>
      <div className="px-6 py-4">
        {keywords.map((word, i) => (
          <KeyWord key={i} word={word} />
        ))}
      </div>
    </div>
  );
}
