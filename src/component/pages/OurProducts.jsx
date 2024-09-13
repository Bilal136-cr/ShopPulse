import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductBanner from "../Products/ProductBanner";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/CartAction";

const OurProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("http://localhost:5000/Product")
      .then((response) => {
        const updatedProducts = response.data.map((product) => ({
          ...product,
          price: generateRandomPrice(), // Assign random price
        }));
        const shuffledProducts = shuffleArray(updatedProducts); // Shuffle products
        setProducts(shuffledProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Function to generate a random price between $10 and $100
  const generateRandomPrice = () => {
    return (Math.random() * (100 - 10) + 10).toFixed(2);
  };

  const showMoreProducts = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 4);
  };

  const handleNavigate = (ProductId) => {
    navigate(`/SingleProduct/${ProductId}`);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="container mx-auto p-8">
      {/* Header Section */}
      <ProductBanner
        title="Check All Our Products"
        description="Discover all the latest and best products with unbeatable comfort and quality."
        ImageUrl="/assets/Product/Headphones/whiteHeadphon1.png"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 sm:px-0 mt-8">
        {products.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            onClick={() => handleNavigate(product.id)}
            className="relative bg-white rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden rounded-t-2xl h-60">
              <img
                src={product.image || "default-image.png"} // Add a fallback image
                alt={product.title}
                className="w-full h-full object-cover" // Ensure the image covers the section
              />
            </div>

            {/* Content Section */}
            <div className="p-4 text-left">
              <div className="flex justify-between items-center  mb-2">
                <h2 className="text-xs uppercase text-gray-500 font-medium tracking-wide">
                  {product.Category || "Unknown Category"}
                </h2>
                <div className="text-lg font-semibold text-gray-800">
                  ${product.price}
                </div>
              </div>
              <h1 className="text-md text-left font-bold text-gray-900">
                {product.title || "Untitled"}
              </h1>
              <p className="text-gray-600 text-sm mt-1 mb-4">
                {product.description && product.description.length > 80
                  ? `${product.description.substring(0, 80)}...`
                  : product.description || "No description available"}
              </p>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white py-2 px-4 rounded-lg mt-2 hover:opacity-90 transition-transform transform hover:translate-y-1 w-full"
              >
                Check it out
              </button>
            </div>
          </div>
        ))}
      </div>

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

export default OurProducts;
