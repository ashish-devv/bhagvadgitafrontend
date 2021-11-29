import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../images/524 [Converted].svg";
import logo from "../images/bhagavad-gita.png";
import Shlokcard from "./Shlokcard";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
    };
    this.getShlok = this.getShlok.bind(this);
  }
  componentDidMount() {
    this.getShlok();
  }
  getShlok() {
    this.setState({ loading: true });
    fetch("https://bhagvadgita.herokuapp.com/gita")
      .then((response) => {
        if (!response.ok) {
          this.setState({ loading: false });
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ data: data, loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.getShlok();
      });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <img
              src={image}
              className="img-fluid cardshadow"
              alt=""
              height="70%"
              data-aos="fade-right"
              data-aos-duration={2000}
            />
          </div>
          {/* second half */}
          <div className="col-sm-6">
            <h1 className="display-1 text-center mt-4">
              <img src={logo} alt="" width={60} height={60} />
              श्रीमद्‍भगवद्‍गीता
            </h1>
            <Shlokcard data={this.state.data} loading={this.state.loading} />
            <p
              className="text-center mt-4 pt-4"
              style={{ fontSize: "xx-large" }}
            >
              <button
                className="btn btn-danger m-4 text-center"
                onClick={this.getShlok}
              >
                <i className="fas fa-sync fa-spin" /> Another Shlok
              </button>
              <br />
              <Link to="/moreshlok" className="btn btn-outline-danger">
                Read Shlok From Another Chapters
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
