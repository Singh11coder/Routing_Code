
import React from "react";

const SearchProduct = ({value,setValue}) => {
  
  return (
    <div className="w-full px-7 py-5">
      <div className="flex w-full max-w-2xl items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">

        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 shrink-0 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search products by name, brand..."
          className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"
        />

        {/* Clear button UI */}
        <button
          type="button"
          className="shrink-0 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
        >
          Clear
        </button>
      </div>

      <p className="mt-2 ml-1 text-xs text-gray-400">
        Find your favorite products quickly
      </p>
    </div>
  );
};

export default SearchProduct;
