import axios from "../utils/axios.config";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/slices/AuthSlice";

const NavList = ({ toggleNav, setToggleNav, loggedInUser }) => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const res = await axios.post("/user/logout", {
      user: loggedInUser,
    });
    const data = await res.data;
    toast.success(data.message);
    dispatch(logoutUser());
    window.location.href = "/";
  };

  return (
    <div
      className={` ${
        !toggleNav && "translate-x-[200px]"
      } fixed top-12 right-5 lg:right-8 p-3 w-fit bg-white bg-opacity-10 backdrop-blur-sm flex flex-col justify-center items-start rounded-lg shadow-md border border-white font-bold text-gray-600 transtion-all duration-500 ease-in-out`}
    >
      {loggedInUser ? (
        <li
          onClick={handleLogout}
          className="hover:text-black select-none list-none"
        >
          Logout
        </li>
      ) : (
        <div className="flex flex-col">
          <Link to="/login" className="hover:text-black select-none">
            Login{" "}
          </Link>
          <Link to="/signup" className="hover:text-black select-none">
            Signup{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavList;
