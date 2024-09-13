import React from "react";
import { Link } from "react-router-dom";

function Banner({ title, description, imageSrc }) {
  return (
    <div className="Banner bg-gradient-to-r from-black via-purple-900 to-black text-white mt-10 mb-16 rounded-3xl px-6 md:pl-12 h-auto md:h-[520px] max-w-[94%] mx-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between w-full h-full">
        {/* Content Section */}
        <div className="text-left mb-10 md:mb-0 w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 whitespace-normal">
            Amplify Your Sound Escape
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8">
            Experience Sound in its Purest Form
          </h2>
          <div className="flex justify-left md:justify-start space-x-4">
            <button className="bg-white text-indigo-600 hover:bg-gray-200 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition duration-300">
              <Link to="/OurProducts">Shop Now</Link>
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-indigo-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition duration-300">
              <Link to="/LearnMore">Learn More</Link>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:w-1/4 h-64 md:h-full flex justify-center md:justify-end items-end mr-0 md:mr-20">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="/assets/banner2.png"
            alt="Audio Experience"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
