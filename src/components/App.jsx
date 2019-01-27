import React, { Component } from "react";
import DrumPads from "./DrumPads";

class App extends Component {
  render() {
    return (
      <div id="drum-machine">
        <p id="display" />
        {/*VolumeSlider hier*/}
        <DrumPads />
      </div>
    );
  }
}

export default App;
