import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import DrumPadContainer from "./DrumPadContainer";
import VolumeSlider from "./VolumeSlider";
import Display from "./Display";
import { setPressedKey } from "../actionCreators";

class App extends Component {
  componentDidMount() {
    document.addEventListener("keypress", event => {
      this.props.setPressedKey(event.key.toUpperCase());
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", event => {
      this.props.setPressedKey(event.key.toUpperCase());
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main id="drum-machine-container">
          <div id="drum-machine">
            <Display />
            <VolumeSlider />
            <DrumPadContainer />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setPressedKey: function(key) {
      dispatch(setPressedKey(key));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
