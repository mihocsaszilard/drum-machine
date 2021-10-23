import React, { Component } from "react";
import "./App.scss";
import Pads from "./components/pads/Pads";
import Display from "./components/display/Display";
import { set1, set2 } from "./components/songs";

class App extends Component {
  state = {
    toPlay: set1,
    setName: "Push to change Song Pack ",
  };

  changeSongSet = () => {
    if (this.state.toPlay === set1) {
      this.setState({
        toPlay: set2,
        setName: "Song Pack 2",
      });
    } else {
      this.setState({
        toPlay: set1,
        setName: "Song Pack 1",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div id="drum-machine">
            <Display />
            <Pads set={this.state.toPlay} />
          </div>{" "}
          <div className="wrapper">
            <p id="song-set">{this.state.setName}</p>
            <button id="change-set" onClick={this.changeSongSet}>
              Change Songs
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
