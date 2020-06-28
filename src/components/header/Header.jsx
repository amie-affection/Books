import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul
          style={{
            display: "Flex",
            listStyle: "none",
          }}
        >
          <li>
            <NavLink
              exact
              to="/"
              style={{ padding: "10px", display: "block", color: "black" }}
              activeStyle={{ background: "orange" }}
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              style={{ padding: "10px", display: "block", color: "black" }}
              activeStyle={{ background: "orange" }}
            >
              Find Books
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
