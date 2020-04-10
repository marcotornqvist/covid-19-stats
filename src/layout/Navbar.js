import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        Insert Name
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item login">
            <Link className="nav-link" to="/sign-in">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
