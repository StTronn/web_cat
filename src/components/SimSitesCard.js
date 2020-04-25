import React from "react";

export default function ({ websites }) {
  return (
    <div className="min-w-full max-w-sm rounded overflow-hidden shadow-lg ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Simillar Sites</div>
      </div>
      <div className="text-center px-6 py-4">
        {websites.map((website, i) => (
          <h3 key={i} className="underline text-blue-600 leading-tight">
            <a href={website}>{website}</a>
          </h3>
        ))}
      </div>
    </div>
  );
}
