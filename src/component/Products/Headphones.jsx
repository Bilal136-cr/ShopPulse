import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ProductBanner from "./ProductBanner";
const Headphones = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Product?Category=Headphones")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
  };

  const handleNavigate = (ProductId) => {
    navigate(`/SingleProduct/${ProductId}`);
  };
  return (
    <div className="container cursor-pointer mx-auto p-8">
      {/* Header Section */}
      <ProductBanner
        title="Headphones Collection"
        description="Discover the latest and best headphones to enjoy immersive sound
            quality with unbeatable comfort."
        ImageUrl="/assets/Product/Headphones/whiteHeadphon1.png"
      />

      {/* Products Grid */}
      <div className="grid grid-cols-1 text-left sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
        {" "}
        {/* Adjusted padding */}
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image Wrapper */}
            <div className="relative bg-gray-100 overflow-hidden rounded-t-3xl">
              <img
                src={product.image || "default-image.png"} // Add a fallback image
                alt={product.title}
                className="w-full h-72 object-cover" // Adjusted class for better image display
                onClick={() => handleNavigate(product.id)}
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xs uppercase text-gray-500 font-medium tracking-wide">
                  {product.Category || "Unknown Category"}
                </h2>
                <div className="text-lg font-semibold text-gray-800">
                  ${product.price ? product.price.toFixed(2) : "0.00"}
                </div>
              </div>
              <h1 className="text-lg font-bold text-gray-900 mt-2">
                {product.title || "Untitled"}
              </h1>
              <p className="text-gray-600 text-sm mt-2">
                {product.description && product.description.length > 80
                  ? `${product.description.substring(0, 80)}...`
                  : product.description || "No description available"}
              </p>
              <button className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white py-2 px-4 rounded-lg mt-4 hover:opacity-90 transition-transform transform hover:translate-y-1">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleProducts < products.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={showMoreProducts}
            className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 w-40 h-12 rounded-xl text-white hover:opacity-90 transition"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Headphones;
