import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/reviews"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;