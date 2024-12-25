import React, { useState } from "react";
import Button from "../components/Button.component";
import NavItem from "../components/NavItem.component";
import FooterItem from "../components/FooterItem.component";

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer className="flex justify-between p-6 text-lg">
      <div className="flex">
        <h2 className="font-name text-4xl">Srishti Gautam</h2>
      </div>

      <FooterItem
        label="Explore"
        items={[
          { path: "/", label: "About Me" },
          { path: "/projects", label: "Projects" },
        ]}
      />

      <FooterItem
        label="Design"
        items={[{ path: "/uiuxdesign", label: "UI/UX Design" }]}
      />

      <FooterItem
        label="Contact"
        items={[{ path: "/testimonials", label: "Testimonials" }]}
      />

      <div className="flex flex-col max-w-md">
        <h4 className="text-xl font-semibold">Stay Updated</h4>
        <p className="text-balance text-md">
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
