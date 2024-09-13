import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "../pages/Banner";
import ProductBanner from "./ProductBanner";
import { useNavigate } from "react-router-dom";
const Accessories = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/Product?Category=Accessories")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message || "Error occurred");
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleNavigate = (ProductId) => {
    navigate(`/SingleProduct/${ProductId}`);
  };
  return (
    <div className="p-8 cursor-pointer">
      <ProductBanner
        title="Accessories Collection"
        description="Shop our Accessories Collection for essential tech and style upgrades."
        ImageUrl="/assets/Product/Accessories/Accessories3.png"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleNavigate(product.id)}
              className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out"
            >
              <div className="bg-gray-100 h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="p-6">
                <h2 className="text-sm uppercase text-gray-500 font-medium">
                  {product.category}
                </h2>
                <h1 className="text-xl font-semibold text-gray-900 mt-2">
                  {product.title}
                </h1>
                <p className="text-gray-600 text-sm mt-3">
                  {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
                </p>
                <p className="text-lg font-bold text-gray-800 mt-4">
                  ${product.price}
                </p>
                <button className="mt-6 w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>No products found</div>
        )}
      </div>
    </div>
  );
};

export default Accessories;
