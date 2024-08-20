import React, { useEffect, useState } from "react";
import axios from "../utils/axios.config";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { setCart } from "../redux/slices/CartSlice";

const Success = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const clearCart = async () => {
    const res = await axios.get("/cart/clear-cart");
    const data = await res.data;
    dispatch(setCart([]));
    localStorage.clear();
    toast.success(data.message);
  };

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
          <Link className="underline text-green-600" to={"/"}>
            <span>
              Order More..
              <span></span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Success;
