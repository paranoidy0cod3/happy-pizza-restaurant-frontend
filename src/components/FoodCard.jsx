import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../utils/getCartData.helper";
import { setCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  console.log(loggedInUser);

  const addToCart = async ({ id, name, img, price, rating, quantity }) => {
    const res = await axios.post(
      `https://happy-pizza-restaurant-backend.onrender.com/api/v1/cart/add-to-cart/${loggedInUser._id}`,
      {
        id,
        image: img,
        name,
        price,
        rating,
        quantity,
      }
    );
    const data = await res.data.data;

    toast.success("item addedd successfully!");
    getCart(loggedInUser).then((data) => dispatch(setCart(data)));
  };

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] bg-white  hover:scale-110 cursor-grab transition-all duration-500 ease-in-out "
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">$ {price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between ">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            !loggedInUser
              ? toast.error("Please login to add to cart")
              : addToCart({ id, name, img, price, rating, quantity: 1 });
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
