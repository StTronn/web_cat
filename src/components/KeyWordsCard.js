import React from "react";
import KeyWord from "./KeyWord";

export default function ({ keywords }) {
  return (
    <div className="min-w-full max-w-sm rounded overflow-hidden shadow-lg ">
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
