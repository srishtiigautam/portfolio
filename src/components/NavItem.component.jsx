import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({to, label}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive
            ? "text-pink-600 font-bold"
            : "text-black hover:text-pink-400"
        } px-4 py-2`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
