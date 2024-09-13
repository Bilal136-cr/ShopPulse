import React from "react";

const LearnMore = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md mb-12">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Learn More About Our Services
        </h1>
        <p className="text-gray-700 text-center text-lg">
          Discover the unique features and benefits that make our services stand
          out. From innovative solutions to exceptional support, find out how we
          can help you achieve your goals.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mt-12 p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto mt-12 p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Benefits of Using Our Services
        </h2>
        <ul className="space-y-4 text-gray-700 list-disc list-inside">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-lg">
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 mt-16 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Experience?
          </h3>
          <p className="text-white text-lg mb-6">
            Take the next step today and see the impact our services can have on
            your business or personal life.
          </p>
          <button className="bg-white text-blue-600 py-3 px-6 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition duration-300">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

// Sample data for features and benefits
const features = [
  {
    title: "Custom Solutions",
    description:
      "Tailored solutions designed to meet your specific needs and requirements, ensuring maximum impact.",
  },
  {
    title: "Expert Team",
    description:
      "Our team of professionals brings years of experience to help you navigate challenges and seize opportunities.",
  },
  {
    title: "Innovative Technology",
    description:
      "Stay ahead of the curve with our state-of-the-art technology and tools, designed to drive success.",
  },
  {
    title: "24/7 Support",
    description:
      "Around-the-clock support to assist you whenever you need it, ensuring a seamless experience.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Grow with confidence with our scalable solutions that adapt to your evolving needs.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Get the best value with our competitive pricing, designed to fit your budget.",
  },
];

const benefits = [
  "Improve operational efficiency and productivity.",
  "Reduce costs and maximize your ROI.",
  "Gain a competitive edge in your industry.",
  "Access to cutting-edge technology and tools.",
  "24/7 dedicated customer support.",
  "Flexible and scalable to meet your growth needs.",
];

export default LearnMore;
