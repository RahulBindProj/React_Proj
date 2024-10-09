import { LOGO_URL } from "../utils/constant";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  useEffect(() => {}, [btnNameReact]);
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <>
      <div className="header flex justify-between items-center">
        <div className="logo-container">{LOGO_URL}</div>
        <div className="nav-items ">
          <ul className="flex p-4 m-4">
            <li className="item pr-4">
              Online Status : {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="item pr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="item pr-4">
              <Link to="/about">About Us</Link>
            </li>
            <li className="item pr-4">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="item pr-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="item pr-4 font-bold text-xl">
              <Link to="/cart">Cart ({cartItems.length} Items)</Link>
            </li>
            <li className="item pr-4">User : {loggedInUser}</li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("login");
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
