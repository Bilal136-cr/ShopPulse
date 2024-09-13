import React from "react";
import { toast, ToastContainer } from "react-toastify";
const Blog = () => {
  const notify = () => {
    toast.success("Subscribed successfully");
  };
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-12 flex flex-col lg:flex-row lg:justify-between items-start lg:items-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 lg:mb-0">
          Ascension Blog
        </h1>
        <button
          onClick={notify}
          className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white py-3 px-8 rounded-full font-semibold shadow-lg hover:opacity-90 transition duration-300"
        >
          Subscribe
        </button>
      </div>

      {/* Blog Posts Container */}
      <div className="grid text-left grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Blog Post 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full h-48 relative">
            <img
              src="/assets/blog/GirlHeadphonesAI.png"
              alt="Blog 1"
              className="w-full h-full object-cover" // Ensure the image covers the section
            />
          </div>
          <div className="p-4">
            <p className="text-purple-600 text-xs font-semibold mb-1">Guide</p>
            <span className="text-gray-500 text-xs block mb-2">
              October 9, 2024
            </span>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Music for Every Occasion: Crafting the Perfect Playlist for
              Different Moods and Activities
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Learn how to curate the ideal playlist for any situation, from
              workouts to relaxation and everything in between.
            </p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full font-semibold shadow hover:bg-purple-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full h-48 relative">
            <img
              src="/assets/GirlHeadphone1.png"
              alt="Blog 2"
              className="w-full h-full object-cover" // Ensure the image covers the section
            />
          </div>
          <div className="p-4">
            <p className="text-purple-600 text-xs font-semibold mb-1">Guide</p>
            <span className="text-gray-500 text-xs block mb-2">
              October 9, 2024
            </span>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Music for Every Occasion: Crafting the Perfect Playlist for
              Different Moods and Activities
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Learn how to curate the ideal playlist for any situation, from
              workouts to relaxation and everything in between.
            </p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full font-semibold shadow hover:bg-purple-700 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="w-full h-48 relative">
            <img
              src="/assets/blog/AIEarbuds.png" // Update with your actual image path
              alt="Blog 3"
              className="w-full h-full object-cover" // Ensure the image covers the section
            />
          </div>
          <div className="p-4">
            <p className="text-purple-600 text-xs font-semibold mb-1">Guide</p>
            <span className="text-gray-500 text-xs block mb-2">
              October 9, 2024
            </span>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              The Evolution of Sound: How Audio Technology is Transforming Music
              Experiences
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Explore the advancements in audio technology and how they're
              enhancing the way we experience music.
            </p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-full font-semibold shadow hover:bg-purple-700 transition duration-300">
              Learn More
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Blog;
