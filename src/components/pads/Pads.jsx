import React from "react";
import "./Pads.scss";

export default class Pads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      isActive: false,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    const btn = document.getElementById("S");
    btn.focus();
  }

  handleKeyPress = (event) => {
    let res = this.props.set.find((sound) => {
      return sound.keyCode === event.keyCode;
    });
    console.log(res.keyTrigger);
    // console.log(res.url);
    this.togglePlay(res.url);
  };

  togglePlay = (sound) => {
    let audio = new Audio(sound);
    audio.play();
    //console.log(audio);
  };

  changeStyle = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <div id="pads">
        {" "}
        {/*nem mukodik onpress style*/}
        <button
          onKeyDown={() => {
            this.handleKeyPress();
            this.changeStyle();
          }}
          className={this.state.isActive ? "active-pad" : null}
          tabIndex={0}
          id="Q"
        >
          Q<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="W"
        >
          W<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="E"
        >
          E<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="A"
        >
          A<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="S"
        >
          S<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="D"
        >
          D<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="Z"
        >
          Z<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="X"
        >
          X<audio src={this.handleKeyPress} />
        </button>
        <button
          onKeyDown={this.handleKeyPress}
          className={this.state.isActive ? "active-pad" : null}
          id="C"
        >
          C<audio src={this.handleKeyPress} />
        </button>
      </div>
    );
  }
}
