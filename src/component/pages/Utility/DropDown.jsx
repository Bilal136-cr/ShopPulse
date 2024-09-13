import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen }) => {
  return (
    <div className="flex  items-center justify-center  bg-gray-50">
      <div
        className={`absolute top-full mt-2 p-10 h-[270px] text-left w-[500px] backdrop-blur-lg bg-slate-50/95  text-gray-800 shadow-lg rounded-3xl transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100 visible"
            : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="p-2  mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            What are you searching for?
          </h2>
          <hr className="mt-4 h-1 bg-gray-300 border-none" />
        </div>
        <ul className="grid grid-cols-2 ">
          {["Accessories", "Earbuds", "Speaker", "Headphones"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item}`}
                className="block text-base font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-800 transition-colors duration-200 rounded-md px-4 py-2"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/OurProducts"
              className="block text-base font-semibold text-blue-600 hover:text-blue-700 transition duration-200  underline text-left ml-4 mt-4"
            >
              Discover All Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
