import React from "react";

const Why = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center text-purple-950 mb-12">
        Why ASCENSION?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Exceptional Sound Quality
            </h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              minima aperiam veritatis? Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Exceptional Sound Quality
            </h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              minima aperiam veritatis? Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex h-full  justify-center items-center">
          <img
            src="assets/Products/Earbuds.png"
            alt="Earbuds"
            className=" max-w-md w-  md:max-w-xs  "
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-8">
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Exceptional Sound Quality
            </h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              minima aperiam veritatis? Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Exceptional Sound Quality
            </h2>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              minima aperiam veritatis? Lorem ipsum dolor sit amet consectetur
              adipisicing.
            </p>
          </div>
        </div>
      </div>

      <div className="inline-block items-center mt-12 space-x-6">
        <button className="bg-gradient-to-r text-lg from-purple-900 via-gray-800 to-purple-900 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:opacity-90 transition duration-300">
          Shop Now
        </button>
        <button className=" text-purple-900  py-3 text-lg px-8 rounded-full font-semibold hover:text-purple-500  hover:underline transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Why;
