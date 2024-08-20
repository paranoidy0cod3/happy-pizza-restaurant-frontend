import axios from "axios";

export const getCart = async (user) => {
  const res = await axios.get(
    `http://localhost:8000/api/v1/cart/get-cart/${user._id}`
  );
  const data = await res.data;
  localStorage.setItem("cartItems", JSON.stringify(data.data));
  return data.data;
};
