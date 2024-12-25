import React, { useState } from "react";
import Button from "../components/Button.component";
import NavItem from "../components/NavItem.component";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="flex justify-between gap-8 p-6 text-lg">
      <div className="flex">
        <h2 className="font-name text-4xl">Srishti Gautam</h2>
      </div>

      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">Explore</h4>
        <ul className="mt-4 space-y-2">
          <li>
            <NavItem to={"/"} label="About Me" className="p-0" />
          </li>
          <li>
            <NavItem to={"/projects"} label="Projects" className="p-0" />
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">Design</h4>
        <ul className="mt-4 space-y-2">
          <li>
            <NavItem to={"/uiuxdesign"} label="UI/UX Design" className="p-0" />
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h4 className="text-xl font-semibold">Connect</h4>
        <ul className="mt-4 space-y-2">
          <li>
            <NavItem
              to={"/testimonials"}
              label="Testimonials"
              className="p-0"
            />
          </li>
        </ul>
      </div>

      <div className="flex flex-col max-w-md">
        <h4 className="text-xl font-semibold">Stay Updated</h4>
        <p className="mt-4 text-balance">
          Subscribe to receive latest updates on my projects and design
          insights.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="px-4 py-2 rounded-md text-gray-700 focus:outline-none border border-pink-400 focus:border-pink-600 focus:ring focus:ring-pink-600 focus:outline-pink-600"
          />
          <Button label="Subscribe" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
