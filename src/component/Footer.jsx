import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r mt-20 from-black via-purple-900 to-black text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Flex Container for Left and Right Side */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Side: About Us and Subscribe Section */}
          <div className="flex-1 space-y-8">
            {/* About Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">About Us</h2>
              <p className="text-gray-300">
                Suspendisse quis sodales nunc. Sed ligula enim, mattis ut sem
                id, mollis sagittis sapien.
              </p>
            </div>

            {/* Subscribe Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Join Our List Today!</h2>
              <form className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-lg text-gray-800 placeholder-gray-400 border border-gray-700"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-gray-300 mt-2">
                By subscribing you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Side: Pages, Contact, and Utility Links */}
          <div className="flex-1 flex flex-col lg:flex-row gap-10 lg:gap-16 lg:justify-end">
            {/* Pages Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Pages</h2>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Product Category
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Product Single
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact</h2>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Blog Post
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Policies
                  </a>
                </li>
              </ul>
            </div>

            {/* Utilities Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Utilities</h2>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Style Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Licenses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    404
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-indigo-400 transition-colors duration-200"
                  >
                    Password
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-300">
          <p className="text-sm">Built by Salmon Pixel · Powered by Webflow</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
