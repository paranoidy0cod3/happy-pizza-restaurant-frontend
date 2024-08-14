import React from "react";
import { Navbar, FoodItems, CategoryMenu, Cart } from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
    </>
  );
};

export default Home;
