import React from "react";
import { NavLink } from "react-router-dom";

const navs = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/about",
    name: "About"
  },
  {
    path: "/contact",
    name: "Contact"
  }
]

const Nav = () => (
    <nav className="bg-purple-600 text-white p-4 shadow">
      <ul className="flex space-x-4 justify-center">
        {navs.map((navItem) => (
          <li>
            <NavLink 
              exact to={navItem.path} 
              activeClassName="text-purple-300 border-b-2 border-purple-300">
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
  </nav>
);

export default Nav;