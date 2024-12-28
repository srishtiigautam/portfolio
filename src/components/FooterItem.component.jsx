import React from "react";
import NavItem from "./NavItem.component";

const FooterItem = ({ label, items }) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-xl font-semibold">{label}</h4>
      <ul className="mt-4 space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <NavItem to={item.path} label={item.label} className="p-0" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
