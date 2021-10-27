import React from "react";
import "./Display.scss";

export default class Display extends React.Component {
  render() {
    return (
      <div class="display-container">
        <div className="now-playing">
          <p>Now playing: </p>
          <p id="display">{this.props.padName}</p>
        </div>
      </div>
    );
  }
}
