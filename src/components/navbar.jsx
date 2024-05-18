import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "./drawer";
import logo from "../assets/logo.png";
import { useUserData } from "../hooks/helpers";
import {
  RiAccountCircleLine,
  RiAccountCircleFill,
  RiShoppingBag2Line,
  RiPencilLine,
  RiLogoutCircleLine,
  RiMenu2Line,
} from "@remixicon/react";


const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, updateUserAndStore } = useUserData();
  const [username, setUsername] = useState("");


  useEffect(() => {
    if (user && user.username) {
      setUsername(user.username);
    }
  }, [user]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    updateUserAndStore(null);
    setDropdownOpen(false);
    window.location.href = "/";
  };

  return (
    <nav className="md:mt-6 sticky top-0 z-50 bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center rtl:space-x-reverse">
          <img src={logo} className="h-18 w-24 md:w-40" alt="Logo" />
        </Link>
        <div className="flex md:order-2 md:space-x-10 space-x-5 rtl:space-x-reverse">
          <Drawer />
          {user ? (
            <div className="relative">
              <RiAccountCircleLine
                className="my-icon w-8 h-8 md:w-9 md:h-9 text-gray-500 hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
                alt="account"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute top-12 -left-8 w-40 bg-white border border-gray-200  shadow-md rounded-md">
                  <div className="p-4 border-b flex items-center">
                    <RiAccountCircleFill className="w-6 h-6 mr-2 text-gray-600" />
                    <span className="text-md text-slate-500 font-semibold capitalize">
                      {username}
                    </span>
                  </div>
                  <Link to = "/account">
                  <div className="p-4 flex items-center">
                    <RiPencilLine className="w-6 h-6 mr-2 text-gray-500 cursor-pointer hover:text-green-600" />
                    <button className="text-md text-gray-500  hover:scale-95 transition-all duration-300">
                      Profile
                    </button>
                  </div>
                  </Link>
                  {/* <Link to = "/account">
                  <div className="p-4 flex items-center">
                    <RiShoppingBag2Line className="w-6 h-6 mr-2 text-gray-500 cursor-pointer hover:text-orange-400" />
                    <button className="text-md text-gray-500  hover:scale-95 transition-all duration-300">
                      Orders
                    </button>
                  </div>
                  </Link> */}
                  <div className="p-4  flex items-center">
                    <RiLogoutCircleLine className="w-6 h-6 mr-2 text-gray-500 cursor-pointer hover:text-red-500" onClick={handleLogout} />
                    <button
                      onClick={handleLogout} title="Logging Out"
                      className="text-md text-gray-500  hover:scale-95 transition-all duration-300"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <RiAccountCircleLine
                className="my-icon w-8 h-8 md:w-10 md:h-10 text-gray-500 hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out"
                alt="account"
              />
            </Link>
          )}
          <RiMenu2Line
            className="my-icon w-8 h-8 md:w-9 md:h-9 text-gray-500 hover:cursor-pointer hover:scale-90 transition duration-300 ease-in-out md:hidden"
            onClick={toggleMenu}
            alt="menu"
          />
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:mt-0 mt-4 md:order-1 ${
            menuOpen
              ? "block bg-gray-100 transition-opacity duration-500 ease-in-out"
              : "hidden"
          }`}
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 md:border-0  text-lg font-semibold md:bg-white">
            <NavItem to="/" text="Home" isActive={isActive} />
            <NavItem to="/shop" text="Shop" isActive={isActive} />
            <NavItem to="/blog" text="Blog" isActive={isActive} />
            <NavItem to="/about" text="About" isActive={isActive} />
            <NavItem to="/contact" text="Contact" isActive={isActive} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ to, text, isActive }) => {
  return (
    <li>
      <Link
        to={to}
        className={`block py-2 px-3 md:p-0 hover:text-gold-100 rounded transition duration-300 ease-in-out ${
          isActive(to) ? "text-gold-100" : "text-gray-500"
        }`}
        aria-current={isActive(to) ? "page" : undefined}
      >
        {text}
      </Link>
    </li>
  );
};

export default Navbar;
