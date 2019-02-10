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
      this.clickButton();
    }
  }

  clickButton() {
    playAudioAndUpdateDisplay(
      this.props.hotKey,
      this.props.soundName,
      this.props.volume,
      this.props.writeSoundNameToDisplay
    );
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
        onClick={this.clickButton}
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

function playAudioAndUpdateDisplay(
  hotKey,
  soundName,
  volume,
  updateDisplayCallback
) {
  const audioFile = document.getElementById(hotKey);
  audioFile.volume = volume;
  audioFile.currentTime = 0;
  audioFile.play();
  updateDisplayCallback(soundName);
}

export default DrumPad;
