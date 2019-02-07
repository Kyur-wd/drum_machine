import React, { Component } from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleClasses: "drum-pad"
    };

    this.clickButton = this.clickButton.bind(this);
  }

  // Neue Props erhalten, also prüfen, ob der eigene Hotkey gedrückt wurde, falls ja: Audio starten und "Pressed" Style anwenden
  componentDidUpdate() {
    if (this.props.pressedKey === this.props.hotKey) {
      this.clickButton(
        this.props.hotKey,
        this.props.soundName,
        this.props.writeSoundNameToDisplay
      );
    }
  }

  clickButton(hotkey, soundName, updateDisplayCallback) {
    playAudioAndUpdateDisplay(hotkey, soundName, updateDisplayCallback);
    this.setState({ styleClasses: "drum-pad drum-pad-clicked" });
    setTimeout(() => {
      this.setState({ styleClasses: "drum-pad" });
    }, 200);
  }

  render() {
    return (
      <button
        className={this.state.styleClasses}
        id={this.props.soundName}
        onClick={() =>
          this.clickButton(
            this.props.hotKey,
            this.props.soundName,
            this.props.writeSoundNameToDisplay
          )
        }
      >
        {this.props.hotKey}
        <audio
          className="clip"
          id={this.props.hotKey}
          src={this.props.playedSoundFileUrl}
          preload="auto"
        />
      </button>
    );
  }
}

function playAudioAndUpdateDisplay(hotkey, soundName, updateDisplayCallback) {
  const audioFile = document.getElementById(hotkey);
  audioFile.currentTime = 0;
  audioFile.play();
  updateDisplayCallback(soundName);
}

export default DrumPad;
