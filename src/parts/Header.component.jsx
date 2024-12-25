import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button.component";

const Header = () => {
  return (
    <header className="bg-slate-500 flex justify-between items-center">
      <div>
        <h1>Srishti Gautam</h1>
      </div>
      <div className="flex justify-between items-center">
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-blue-500 font-semibold underline"
                  : "text-gray-300 hover:text-blue-400"
              } px-4 py-2 rounded-md`
            }
          >
            About Me
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-blue-500 font-semibold underline"
                  : "text-gray-300 hover:text-blue-400"
              } px-4 py-2 rounded-md`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/uiuxdesign"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-blue-500 font-semibold underline"
                  : "text-gray-300 hover:text-blue-400"
              } px-4 py-2 rounded-md`
            }
          >
            UI/UX Design
          </NavLink>
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-blue-500 font-semibold underline"
                  : "text-gray-300 hover:text-blue-400"
              } px-4 py-2 rounded-md`
            }
          >
            Testimonials
          </NavLink>
        </nav>
        <Button />
      </div>
    </header>
  );
};

export default Header;
