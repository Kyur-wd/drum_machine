import React, { Component } from "react";
import { connect } from "react-redux";
import { updateDisplayText, resetPressedKey } from "../actionCreators";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleClasses: "drum-pad"
    };
    this.clickButton = this.clickButton.bind(this);
  }

  // Neue Props erhalten, also prüfen, ob der eigene Hotkey (Tastatur) gedrückt wurde, falls ja: Audio starten und "Pressed" Style anwenden
  componentDidUpdate() {
    if (this.props.pressedKey === this.props.hotKey) {
      this.clickButton();
      this.props.resetPressedKey();
    }
  }

  // Wird ausgelöst bei Maus-Click und Tastatur-Click
  clickButton() {
    const audioFile = document.getElementById(this.props.hotKey);
    audioFile.volume = this.props.volume;
    audioFile.currentTime = 0;
    audioFile.play();

    // Display updaten
    this.props.updateDisplayText(this.props.soundName);

    // Styles setzen
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

const mapStateToProps = state => {
  return {
    volume: state.volume,
    pressedKey: state.pressedKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDisplayText: function(text) {
      dispatch(updateDisplayText(text));
    },
    resetPressedKey: function() {
      dispatch(resetPressedKey());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrumPad);
