import React from "react";
import Logo from "../Assets/Images/logo.webp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="navbar bg-dark border-bottom border-body"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link class="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            width="40"
            height="40"
            class="d-inline-block align-text-top"
          />
        </Link>
        <ul class="nav">
          <li class="nav-item">
            <Link class="nav-link" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
