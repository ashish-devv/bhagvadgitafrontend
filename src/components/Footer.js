import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright: Made With 💖 By Ashish &nbsp;&nbsp;&nbsp;
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
        </div>
      </footer>
    );
  }
}
