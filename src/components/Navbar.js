import React, { Component } from "react";
import logo from "../images/bhagavad-gita.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-warning">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img
              src={logo}
              alt=""
              width={30}
              height={30}
              className="d-inline-block align-text-top"
            />
            Bhagavad Gita
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  More Shloks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Get Shlok Via Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
