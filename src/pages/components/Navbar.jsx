import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://keenitsolutions.com/products/wordpress/braintech/wp-content/uploads/2020/11/logo_dark.png"
              alt="Logo"
              id="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Portfolios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <FaSearch />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
