// src/components/Contact.js
import React from "react";
import { ToastContainer } from "react-toastify";
const Contact = () => {
  const notify = () => toast.success("Message sent successfully");

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We would love to hear from you! Whether you have a question about
            our products, pricing, or anything else, our team is ready to answer
            all your questions.
          </p>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-indigo-600 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.3 5.64C1.04 7.93 2.38 11.08 5.55 14.25s6.32 4.5 8.61 3.23c.75-.41 1.53-1.41 2.45-2.33.92-.92 1.92-1.7 2.33-2.45 1.27-2.29-.41-5.4-3.23-8.61-3.17-3.17-6.32-4.51-8.61-3.23-.75.41-1.53 1.41-2.45 2.33-.92.92-1.92 1.7-2.33 2.45z"></path>
            </svg>
            <span className="text-gray-700 text-lg">+1 234 567 890</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-indigo-600 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 8V7l-3 2-2-1-2 1-2-1-2 1-2-1-2 1-2-1-3 2v1l3-2 2 1 2-1 2 1 2-1 2 1 2-1 3 2zm0 8V9l-3 2-2-1-2 1-2-1-2 1-2-1-2 1-2-1-3 2v7h18z"></path>
            </svg>
            <span className="text-gray-700 text-lg">info@company.com</span>
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="w-6 h-6 text-indigo-600 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M21 10l-2 2-3-3-4 4-3-3L3 17h18z"></path>
            </svg>
            <span className="text-gray-700 text-lg">
              123 Street Name, City, Country
            </span>
          </div>
          <div className="mt-8">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093177!2d144.9537363153167!3d-37.81627927975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770f1017f9c809!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1631562870642!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h3>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={notify}
              className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
