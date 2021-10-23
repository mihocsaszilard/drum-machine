import React, { Component } from "react";
import "./App.scss";
import Pads from "./components/pads/Pads";
import Display from "./components/display/Display";
import { set1, set2 } from "./components/songs";

class App extends Component {
  state = {
    toPlay: set1,
  };

  changeSongSet = () => {
    if (this.state.toPlay === set1) {
      this.setState({
        toPlay: set2,
      });
    } else {
      this.setState({
        toPlay: set1,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div id="drum-machine">
          <Display />
          <Pads set={this.state.toPlay} />
          <button onClick={this.changeSongSet}>Change Sounds</button>
        </div>
      </div>
    );
  }
}
export default App;
