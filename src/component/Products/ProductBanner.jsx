import React from "react";

function ProductBanner({ title, description, ImageUrl }) {
  return (
    <div>
      <div className="w-full flex mb-16 mt-4 h-64 justify-between items-center px-8 py-6 bg-slate-100 shadow-lg rounded-3xl">
        <div className="flex flex-col text-left p-8">
          <h1
            className="text-purple-950 font-bold text-4xl"
            style={{ fontFamily: "'Fjalla One', sans-serif" }}
          >
            {title}
          </h1>
          <p className="mt-2 text-lg text-gray-600 max-w-md">{description}</p>
        </div>
        <img
          src={ImageUrl}
          alt="Headphones"
          className="w-48 h-48 object-contain absolute right-32 top-48"
        />
      </div>
    </div>
  );
}

export default ProductBanner;
