import React from "react";
import { Link } from "react-router-dom";

const PagesDropDown = ({ isOpen }) => {
  // Grouping the pages under headings for better organization
  const groupedPages = {
    "General Pages": ["About", "Banner", "Home", "Contact", "Policies"],
    "Blog Pages": ["Blog_post", "Blog", "blog", "Why", "Shop"],
    "Shop Pages": [
      "FeaturedProduct",
      "OurProducts",
      "ProductCategory",
      "SingleProduct",
      "Shopping",
    ],
  };

  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div
        className={`absolute top-full mt-2 text-left p-6 w-[500px] max-h-[400px] backdrop-blur-lg bg-slate-50/95 text-gray-800 shadow-lg rounded-3xl transform transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="p-4 mb-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Discover Our Pages
          </h1>
          <hr className="mt-4 h-1 bg-gray-300 border-none" />
        </div>
        <div className="flex px-4 max-h-[280px] overflow-y-auto custom-scrollbar">
          {/* Headings and Links organized in rows and columns */}
          {Object.keys(groupedPages).map((heading) => (
            <div key={heading} className="flex-1">
              <h3 className="text-sm font-semibold text-purple-700 mb-1">
                {heading}
              </h3>
              <ul className="flex flex-col gap-1">
                {groupedPages[heading].map((page) => (
                  <li key={page}>
                    <Link
                      to={`/${page.replace(/\s+/g, "").toLowerCase()}`}
                      className="text-sm text-gray-700 hover:text-purple-800 transition-colors duration-200"
                    >
                      {page.replace(/([A-Z])/g, " $1").trim()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link
            to="/AllPages"
            className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 transition duration-200 underline"
          >
            Discover All Pages
          </Link>
        </div>
      </div>

      {/* Custom Scrollbar CSS */}
      <style>
        {`
          /* Webkit-based browsers */
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px; /* Width of the scrollbar */
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1; /* Background color of the track */
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888; /* Color of the scrollbar thumb */
            border-radius: 10px; /* Rounded corners for the scrollbar thumb */
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555; /* Darker color on hover */
          }
        `}
      </style>
    </div>
  );
};

export default PagesDropDown;
