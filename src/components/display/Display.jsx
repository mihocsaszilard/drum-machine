import React from "react";
import "./Display.scss";

export default class Display extends React.Component {
  render() {
    return (
      <div id="display">
        <div className="now-playing">
          <p>Now playing: </p>
          <p>{this.props.padName}</p>
        </div>
      </div>
    );
  }
}
