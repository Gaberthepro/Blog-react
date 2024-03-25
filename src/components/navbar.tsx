import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import AddPost from "../pages/addPost/addPost"
import App from "../App";

export function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Blog</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/addPost">
                  Post
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/addPost" element={<AddPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
