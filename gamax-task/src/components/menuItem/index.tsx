import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  to: string;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, text }) => {
  return (
    <li className="mr-4 rounded">
      <Link
        to={to}
        className="text-black hover:underline hover:text-black font-semibold cursor-pointer"
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
