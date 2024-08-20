import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
axios.defaults.withCredentials = true;

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const loggedInUser = useSelector((state) => state.auth.loggedInUser);

  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const navigate = useNavigate();

  const checkout = async () => {
    if (!loggedInUser) {
      toast.error("login for place order.");
    }
    const res = await axios.get("http://localhost:8000/api/v1/cart/checkout");
    const url = await res.data.data;

    window.location.href = url;
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold  p-1 text-xl  rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return <ItemCard key={food.id} {...food} />;
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice} $
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={checkout}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="relative">
        <FaShoppingCart
          onClick={() => setActiveCart(!activeCart)}
          className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
            totalQty > 0 && "animate-bounce delay-500 transition-all"
          } `}
        />
      </div>
    </>
  );
};

export default Cart;
