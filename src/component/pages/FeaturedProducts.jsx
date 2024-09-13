import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Charger",
    category: "Accessories",
    price: 170.0,
    image: "/assets/Products/Wireless_charger.png",
    route: "Accessories",
  },
  {
    id: 2,
    name: "EarBuds Y168A",
    category: "Earbuds",
    price: 360.0,
    image: "/assets/Products/Wireless_Earbuds.png",
    route: "Earbuds",
  },
  {
    id: 3,
    name: "Pro X1686",
    category: "Headphones",
    price: 270.0,
    image: "/assets/Product/Headphones/Headphone14.png",
    route: "Headphones",
  },
  {
    id: 4,
    name: "Speaker P1684",
    category: "Speaker",
    price: 570.0,
    image: "/assets/Products/Earpods.png",
    route: "Speaker",
  },
];

const FeaturedProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 md:p-8">
      <h1
        className="text-center text-3xl text-purple-950 font-bold mb-6"
        style={{
          fontFamily: "'Fjalla One', sans-serif",
          fontSize: "39px",
          lineHeight: "1.3",
        }}
      >
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-6 md:gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-50 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
            onClick={() => navigate(`/products/${product.route}`)} // Updated to use a dynamic route path
          >
            <div className="relative rounded-3xl bg-slate-400">
              <img
                className="w-full h-64 object-contain p-8"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="p-5 bg-slate-50">
              <p className="text-gray-600 text-xs uppercase font-medium">
                {product.category}
              </p>
              <h1 className="text-lg font-bold text-gray-800 mt-1">
                {product.name}
              </h1>
              <p className="text-gray-900 text-lg font-semibold mt-2">
                ${product.price.toFixed(2)} USD
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center w-full mt-12">
        <button
          onClick={() => {
            navigate("OurProducts");
          }}
          className="bg-gradient-to-r h-14 w-48 from-purple-900 via-gray-800 to-purple-900 rounded-lg text-white hover:opacity-90 transition"
        >
          See All Products
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
