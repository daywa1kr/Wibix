import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleMenu = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div id="le-navbar">
        <nav
          className={
            !this.state.clicked
              ? "navbar navbar-expand-lg d-flex justify-content-between"
              : "navbar navbar-expand-lg d-flex justify-content-between bg-white"
          }
        >
          <Link className="navbar-brand logo mt-2 ms-5" to="/">
            <i className="fa-brands fa-hubspot h2"></i>
            <span className="h2 mx-2 fw-bold">wibix</span>
          </Link>
          <div className="d-md-none">
            <i
              className={
                this.state.clicked
                  ? "fa fa-times h2 me-5 mt-2"
                  : "fa fa-bars h2 me-5 mt-2"
              }
              onClick={this.handleMenu}
            ></i>
            <ul
              className={
                this.state.clicked
                  ? "active text-center p-0 navbar-nav"
                  : "non-active text-center d-none p-0 navbar-nav"
              }
            >
              <li className="nav-item fw-bold mx-2" onClick={this.handleMenu}>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2" onClick={this.handleMenu}>
                <Link to="/resources" className="nav-link">
                  Resources
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2" onClick={this.handleMenu}>
                <Link to="/forum" className="nav-link">
                  Forum
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2" onClick={this.handleMenu}>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2" onClick={this.handleMenu}>
                <Link
                  to="/signup"
                  className="btn-burnt-umber m-2 px-3 nav-link"
                >
                  Join wibix
                </Link>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav d-none d-md-flex justify-content-between mt-2">
            <div className="d-flex justify-content-between">
              <li className="nav-item fw-bold mx-2">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2">
                <Link to="/resources" className="nav-link">
                  Resources
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2">
                <Link to="/forum" className="nav-link">
                  Forum
                </Link>
              </li>
              <li className="nav-item fw-bold mx-2">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </div>
          </ul>

          <Link
            to="/signup"
            className="btn-burnt-umber px-4 py-2 d-none d-md-flex me-5 mt-2"
            id="signup"
          >
            Join wibix
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
