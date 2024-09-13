import React from "react";
import { useNavigate } from "react-router-dom";
const ProductCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="p-8">
      <h1
        className="text-left text-3xl text-purple-950 font-bold mb-6"
        style={{
          fontFamily: "'Fjalla One', sans-serif",
          fontSize: "39px",
          lineHeight: "1.3", // Correct line-height format
        }}
      >
        Product Category
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 text-left mt-14 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          onClick={() => navigate("Accessories")}
          className="max-w-sm bg-slate-100 cursor-pointer shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div className="relative rounded-3xl bg-gray-500 ">
            <img
              className="w-full h-64 rounded-full p-8 object-contain"
              src="/assets/Products/Wireless_charger.png"
              alt="Wireless Charger"
            />
          </div>
          <div className="p-5 ">
            <p className="text-gray-600 text-xs uppercase font-medium">
              Accessories
            </p>
            <h1 className="text-lg font-bold text-gray-800 mt-1">
              Wireless Charger
            </h1>
            <p className="text-gray-900 text-lg font-semibold mt-2">
              $170.00 USD
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-slate-50 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div
            onClick={() => navigate("/Earbuds")}
            className="relative rounded-3xl bg-slate-400"
          >
            <img
              className="w-full h-64 bg-gray-500 object-contain"
              src="/assets/Products/Wireless_Earbuds.png"
              alt="Earbuds"
            />
          </div>
          <div className="p-5 bg-slate-50">
            <p className="text-gray-600 text-xs uppercase font-medium">
              Earbuds
            </p>
            <h1 className="text-lg font-bold text-gray-800 mt-1">
              EarBuds Y168A
            </h1>
            <p className="text-gray-900 text-lg font-semibold mt-2">
              $360.00 USD
            </p>
          </div>
        </div>

        <div
          onClick={() => {
            navigate("/Headphones");
          }}
          className="max-w-sm bg-slate-50 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div className="relative h-64 rounded-3xl bg-slate-400">
            <img
              className="w-full h-64 bg-gray-500 object-contain"
              src="/assets/Product/Headphones/Headphone14.png"
              alt="Headphones"
            />
          </div>
          <div className="p-5 bg-slate-50">
            <p className="text-gray-600 text-xs uppercase font-medium">
              Headphones
            </p>
            <h1 className="text-lg font-bold text-gray-800 mt-1">Pro X1686</h1>
            <p className="text-gray-900 text-lg font-semibold mt-2">
              $270.00 USD
            </p>
          </div>
        </div>

        <div className="max-w-sm bg-slate-50 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <div
            onClick={() => {
              navigate("/Speaker");
            }}
            className="relative rounded-3xl bg-slate-400"
          >
            <img
              className="w-full h-64 bg-gray-500 p-8 object-contain"
              src="/assets/Products/Earpods.png"
              alt="Speaker"
            />
          </div>
          <div className="p-5 bg-slate-50">
            <p className="text-gray-600 text-xs uppercase font-medium">
              Speaker
            </p>
            <h1 className="text-lg font-bold text-gray-800 mt-1">
              Speaker P1684
            </h1>
            <p className="text-gray-900 text-lg font-semibold mt-2">
              $570.00 USD
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
