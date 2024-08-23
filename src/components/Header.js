import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  useEffect(() => {}, [btnNameReact]);
  return (
    <>
      <div className="header">
        <div className="logo-container">{LOGO_URL}</div>
        <div className="nav-items">
          <ul>
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="item">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="item">Cart</li>
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
