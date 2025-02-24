import React from "react";

export default function Project({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      className="flex w-full justify-between items-center py-12 px-24 border-t border-gray-300 cursor-pointer transition-opacity duration-200 hover:opacity-50 last:border-b"
    >
      <h2 className="text-5xl font-normal transition-transform duration-400 hover:-translate-x-2">
        {title}
      </h2>
      <p className="text-lg font-light transition-transform duration-400 hover:translate-x-2">
        Design & Development
      </p>
    </div>
  );
}
