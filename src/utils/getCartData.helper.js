import axios from "../utils/axios.config";

export const getCart = async (user) => {
  const res = await axios.get(
    `https://happy-pizza-restaurant-backend.onrender.com/api/v1/cart/get-cart/${user._id}`
  );
  const data = await res.data;
  localStorage.setItem("cartItems", JSON.stringify(data.data));
  return data.data;
};
