import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: Made With 💖 By
          <Link to="/about#top">Ashish</Link>
          &nbsp;&nbsp;&nbsp;
          <br />
          <a
            href="https://www.linkedin.com/in/ashishkrshu/"
            style={{ color: "grey" }}
          >
            <i class="fab fa-linkedin fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://github.com/ashish-devv/" style={{ color: "grey" }}>
            <i class="fab fa-github fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://instagram.com/ashish.exe" style={{ color: "grey" }}>
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://www.facebook.com/ashishkrfab/"
            style={{ color: "grey" }}
          >
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <br />
          <br />
          <a
            className="btn btn-outline-primary"
            href="https://github.com/ashish-devv/bhagvadgitafrontend"
          >
            <i class="fab fa-github "></i> Frontend Source Code{" "}
          </a>
          <br />
          <a
            className="btn btn-outline-primary"
            href="https://github.com/ashish-devv/bhagvadgitabackend"
          >
            <i class="fab fa-github "></i> Backend Source Code{" "}
          </a>
          <p className="mt-5 mb-3 text-muted">
            <a href="https://www.hitwebcounter.com">
              <img
                src="https://hitwebcounter.com/counter/counter.php?page=7917069&style=0010&nbdigits=6&type=page&initCount=101"
                title="Free Counter"
                Alt="web counter"
                border="0"
              />
            </a>
          </p>
        </div>
      </footer>
    );
  }
}
