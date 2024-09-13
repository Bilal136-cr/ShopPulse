import React from "react";
import { toast, ToastContainer } from "react-toastify";
const JoinOurList = () => {
  const notify = () => toast.success("User Subscribed successfully");

  return (
    <div className="bg-gray-100 h-full w-full text-left flex items-center justify-between mb-20">
      {/* Left side: Image */}
      <div className="w-full h-full">
        <img
          src="/assets/banner3.png"
          className="h-full object-cover"
          alt="Join our list banner"
        />
      </div>

      {/* Right side: Content */}
      <div className="w-1/2 p-12 text-purple-900">
        <h1 className="text-4xl font-bold">Join Our List Today!</h1>
        <p className="font-light mt-4">Be the first to know</p>
        <ul className="grid grid-cols-2 gap-x-8 mt-4">
          <li className="p-4">Limited edition</li>
          <li className="p-4">Special offers</li>
          <li className="p-4">Exclusive Content</li>
          <li className="p-4">No spams!</li>
        </ul>
        <div className="mt-8">
          <input
            placeholder="Enter your email"
            className="p-4 outline-none rounded-lg w-full mb-4 border border-gray-300"
            type="email"
          />
          <button
            onClick={() => notify()}
            className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:opacity-90 transition duration-300 w-full"
          >
            Subscribe
          </button>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JoinOurList;
