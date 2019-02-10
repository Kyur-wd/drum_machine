import React, { Component } from "react";
import Header from "./Header";
import DrumPadContainer from "./DrumPadContainer";
import VolumeSlider from "./VolumeSlider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0.5,
      pressedKey: "",
      lastPlayedSoundName: ""
    };

    this.writeSoundNameToDisplay = this.writeSoundNameToDisplay.bind(this);
    this.adjustVolume = this.adjustVolume.bind(this);
  }

  // EventListener: Speichere gedrückten Hotkey in State
  componentDidMount() {
    document.addEventListener("keypress", event => {
      this.setState({ pressedKey: event.key.toUpperCase() });
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", event => {
      this.setState({ pressedKey: event.key.toUpperCase() });
    });
  }

  // Zeigt auf dem Display den Namen des zuletzt gespielten Sounds (und setzt pressedKey zurück, sonst infinite-loop)
  writeSoundNameToDisplay(playedSoundName) {
    this.setState({ lastPlayedSoundName: playedSoundName, pressedKey: "" });
  }

  adjustVolume(e) {
    let { value: volume } = e.target;
    volume = volume / 100;
    this.setState({ volume });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main id="drum-machine-container">
          <div id="drum-machine">
            <output id="display">{this.state.lastPlayedSoundName}</output>
            <VolumeSlider
              adjustVolume={this.adjustVolume}
              volume={this.state.volume}
            />
            <DrumPadContainer
              pressedKey={this.state.pressedKey}
              writeSoundNameToDisplay={this.writeSoundNameToDisplay}
              volume={this.state.volume}
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
