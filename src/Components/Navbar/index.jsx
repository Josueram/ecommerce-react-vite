import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// Context
import { Context } from "../../Context";

// Icons
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const { count } = useContext(Context);
  const activeStyle = "underline underline-offset-8";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 bg-white border border-b-1 w-full py-5 px-8 text-base">
      <ul className="flex items-center gap-5">
        {/* Left menu */}
        <li className="font-semibold text-xl">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>

      {/* Right menu */}
      <ul className="flex items-center gap-5">
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon className="w-6 h-6 me-2" /> {count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
