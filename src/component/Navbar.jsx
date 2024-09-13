import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./pages/Utility/DropDown";
import PagesDropDown from "./pages/Utility/PagesDropDown";
import AddToCart from "./AddToCart";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPagesDropDownOpen, setIsPagesDropDownOpen] = useState(false);
  const [isCartVisible, setIsCargVisible] = useState(false);

  const toggleCartPopup = () => {
    setIsCargVisible(!isCartVisible);
  };

  return (
    <nav className="bg-white/30 backdrop-blur-md w-full">
      {" "}
      {/* Updated class for transparent and blurred background */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center relative">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-12 ml-0" src="/assets/logo.png" alt="Logo" />
            <span
              className="font-mono text-2xl text-gray-800"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              ASCENSION
            </span>
          </div>
          <div className="hidden md:flex items-center text-xl justify-center flex-1 space-x-8 text-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div className="flex items-center space-x-1 cursor-pointer">
                <Link
                  to="/OurProducts"
                  className="text-gray-80s0 hover:text-indigo-600 font-medium"
                >
                  Products
                </Link>
                <span
                  className={`dropdown-arrow ${isDropdownOpen ? "down" : "up"}`}
                />
              </div>
              <Dropdown isOpen={isDropdownOpen} />
            </div>
            <Link
              to="/About"
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="text-gray-800 hover:text-indigo-600 font-medium"
            >
              Find Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => {
                setIsPagesDropDownOpen(true);
              }}
              onMouseLeave={() => {
                setIsPagesDropDownOpen(false);
              }}
            >
              <div className="flex items-center space-x-1 cursor-pointer">
                <Link
                  to="/Pages"
                  className="text-gray-800 hover:text-indigo-600 font-medium"
                >
                  Pages
                </Link>
                <span
                  className={`dropdown-arrow ${
                    isPagesDropDownOpen ? "down" : "up"
                  }`}
                />
              </div>
              <PagesDropDown isOpen={isPagesDropDownOpen} />
            </div>
          </div>
          <div className="btns flex items-center space-x-4">
            <div className="AddToCart flex items-center space-x-2">
              <img
                className="w-8 h-8 cursor-pointer filter purple"
                src="/assets/empty-cart.png"
                alt="Cart Icon"
                onClick={toggleCartPopup}
              />
              <span className="flex items-center justify-center w-5 h-5 text-white bg-black rounded-full text-xs font-medium">
                0
              </span>
            </div>

            <button className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white px-5 py-3 rounded-lg hover:bg-indigo-700">
              <Link to="/OurProducts">Shop Now</Link>
            </button>
          </div>
        </div>
        <AddToCart isVisible={isCartVisible} onClose={toggleCartPopup} />
      </div>
    </nav>
  );
}

export default Navbar;
