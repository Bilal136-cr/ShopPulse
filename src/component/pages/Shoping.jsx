import React from "react";

const Shoping = () => {
  return (
    <div className="flex flex-col justify-center p-24 mt-20 items-center min-h-screen bg-gray-100 py-16">
      <h1 className="text-4xl text-purple-950 font-bold text-center mb-12">
        Experience Streamlined Shopping with ASCENSION
      </h1>

      <div className="flex-grow flex items-center justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Free Delivery */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center">
            <div className="bg-purple-900 text-white p-4 rounded-full mb-6">
              <i className="fas fa-truck fa-2x"></i>
            </div>
            <h2 className="text-xl font-semibold mb-4">Free Delivery</h2>
            <p className="text-gray-600">
              Enjoy free delivery on all orders, ensuring you get your products
              quickly and hassle-free.
            </p>
          </div>

          {/* Self Pickup */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center">
            <div className="bg-purple-900 text-white p-4 rounded-full mb-6">
              <i className="fas fa-store fa-2x"></i>
            </div>
            <h2 className="text-xl font-semibold mb-4">Self Pickup</h2>
            <p className="text-gray-600">
              Choose self-pickup to collect your orders from our convenient
              locations.
            </p>
          </div>

          {/* Warranty */}
          <div className="bg-white p-8 shadow-lg rounded-lg flex flex-col items-center text-center">
            <div className="bg-purple-900 text-white p-4 rounded-full mb-6">
              <i className="fas fa-shield-alt fa-2x"></i>
            </div>
            <h2 className="text-xl font-semibold mb-4">Warranty</h2>
            <p className="text-gray-600">
              All our products come with a warranty to give you peace of mind
              with your purchases.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <button className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:opacity-90 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Shoping;
