import React, { Component } from "react";

class DrumPad extends Component {
  // Neue Props erhalten, also prüfen, ob der eigene Hotkey gedrückt wurde, falls ja: Audio starten und "Pressed" Style anwenden
  componentDidUpdate() {
    if (this.props.pressedKey === this.props.hotKey) {
      playAudioAndUpdateDisplay(
        this.props.hotKey,
        this.props.soundName,
        this.props.writeSoundNameToDisplay
      );
    }
  }

  render() {
    return (
      <button
        className="drum-pad"
        id={this.props.soundName}
        onClick={() =>
          playAudioAndUpdateDisplay(
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
