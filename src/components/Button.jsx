import React from "react";

export default function ({ children, onClick }) {
  return (
    <button
      className="bg-stone-700 text-stone-200 px-8 py-2 rounded-sm hover:bg-stone-900 transition"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
