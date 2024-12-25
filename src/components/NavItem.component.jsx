import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({to, label}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${
          isActive
            ? "text-blue-500 font-semibold underline"
            : "text-gray-300 hover:text-blue-400"
        } px-4 py-2 rounded-md`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
