import React from "react";
import Button from "../components/Button.component";
import NavItem from "../components/NavItem.component";

const Header = () => {
  return (
    <header className="bg-slate-500 flex justify-between items-center">
      <div>
        <h1>Srishti Gautam</h1>
      </div>
      <div className="flex justify-between items-center">
        <nav>
          <NavItem to={"/"} label="About Me" />
          <NavItem to={"/projects"} label="Projects" />
          <NavItem to={"/uiuxdesign"} label="UI/UX Design" />
          <NavItem to={"/testimonials"} label="Testimonials" />
        </nav>
        <Button />
      </div>
    </header>
  );
};

export default Header;
