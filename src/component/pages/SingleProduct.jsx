import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { addToCart } from "../../Redux/CartAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleProduct = () => {
  const notify = () => toast.success("Item successfully add to Cart");
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    axios
      .get(`http://localhost:5000/Product/${id}`) // Fetch product by ID
      .then((response) => {
        console.log(response.data); // Log the response to check data format
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message || "Error occurred");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  // Check if the image URL is valid; provide a default if not
  const imageUrl = product.image
    ? product.image
    : "https://via.placeholder.com/400";

  const handleAddToCart = () => {
    // Dispatch the addToCart action
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 mt-4 px-4 py-2 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-300 text-transparent bg-clip-text shadow-lg">
        {product.title}
      </h1>

      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative bg-gray-100 h-64">
          <img
            src={imageUrl}
            alt={product.title}
            className="object-cover w-full h-full absolute inset-0"
            style={{ objectFit: "contain" }} // Ensure the image is fully visible
          />
        </div>
        <div className="p-6">
          <h2 className="text-sm uppercase text-gray-500 font-medium">
            {product.Category}
          </h2>
          <p className="text-gray-600 text-sm mt-3">{product.description}</p>
          <p className="text-lg font-bold text-gray-800 mt-4">
            ${product.Price}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-6 w-full bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"
          >
            Add to Cart
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
