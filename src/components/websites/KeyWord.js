import React from "react";

export default function ({ word }) {
  return (
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
      {word}
    </span>
  );
}
