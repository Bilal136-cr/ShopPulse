import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity, // Ensure this is correctly imported
} from "../Redux/CartAction"; // Import additional actions

const AddToCart = ({ isVisible, onClose }) => {
  const cartItems = useSelector((state) => state.cartItems); // Access cart items from Redux store
  const dispatch = useDispatch(); // Initialize dispatch

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.Price * item.quantity,
    0
  );

  return (
    <div
      style={{ marginLeft: "900px" }}
      className={`fixed ${isVisible ? "block" : "hidden"}`}
    >
      <div className="bg-white shadow-lg  rounded-lg p-6 mt-2 w-96 h-96">
        <h2 className="text-lg font-semibold text-gray-800">Your Cart</h2>

        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between text-sm items-center mt-4"
              >
                <div>
                  <img className="w-7 h-7 rounded" src={item.image} alt="" />
                </div>
                <span>{item.title}</span>
                <div className="flex items-center">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))} // Decrease quantity
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQuantity(item.id))} // Increase quantity
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))} // Dispatch removeFromCart action
                  className=" text-white px-2 py-1 rounded"
                >
                  <div className="w-6">
                    <img src="/public/assets/Delete.png" alt="Delete" />
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600 mt-2">Your cart is empty.</p>
        )}

        {/* Total Price Display */}
        <div className="mt-4">
          <h3 className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</h3>
        </div>

        <button
          onClick={onClose}
          className="mt-4 w-full bg-gradient-to-r from-purple-900 via-gray-800 to-purple-900 text-white px-4 py-2 rounded hover:opacity-90 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
