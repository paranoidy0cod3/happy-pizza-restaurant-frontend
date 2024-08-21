import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import NavList from "./NavList";
import axios from "../utils/axios.config";
import { loginUser, setUser } from "../redux/slices/AuthSlice";
import { setCart } from "../redux/slices/CartSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggleNav, setToggleNav] = useState(false);

  // const auth = useSelector((state) => state.auth.accessToken);
  const loggedInUser = useSelector((state) => state.auth.loggedInUser);
  const fetchCurrentUser = async () => {
    try {
      const res = await axios.get("/user/current-user");
      dispatch(loginUser(res.data.data));
    } catch (error) {
      console.log(error);
      // navigate("/login");
    }
  };
  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ">Happy Pizza</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
      <GiHamburgerMenu
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${
          toggleNav && "hidden"
        } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(true)}
      />
      <MdClose
        className={`absolute top-5 right-5 lg:right-8 lg:top-6 text-2xl text-gray-600 cursor-pointer ${
          !toggleNav && "hidden"
        } transition-all ease-in-out duration-500`}
        onClick={() => setToggleNav(false)}
      />
      <NavList
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        loggedInUser={loggedInUser}
      />
    </nav>
  );
};

export default Navbar;
