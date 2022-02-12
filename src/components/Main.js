import React, { Component } from "react";
import { Link } from "react-router-dom";
import image from "../images/524 [Converted].svg";
import logo from "../images/bhagavad-gita.png";
import Shlokcard from "./Shlokcard";
import audio from "../static/Atma Rama Ananda Ramana ( Full Song ).mp3";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      audio: new Audio(audio),
      isPlaying: false,
    };
    this.getShlok = this.getShlok.bind(this);
    this.playPause = this.playPause.bind(this);
  }
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      this.state.audio.pause();
    } else {
      // Play the song if it is paused
      this.state.audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });
  };
  componentDidMount() {
    this.getShlok();
    this.playPause();
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

              <br />
              {/* play button */}
              <button
                className="btn btn-outline-success"
                onClick={this.playPause}
              >
                <i className="fas fa-play" /> Play | Pause Audio
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
