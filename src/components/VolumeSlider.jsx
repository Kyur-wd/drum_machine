import React from "react";
import { connect } from "react-redux";
import { setVolume } from "../actionCreators";

const VolumeSlider = props => {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={props.volume * 100}
      onChange={props.adjustVolume}
      id="slider"
    />
  );
};

const mapStateToProps = state => {
  return {
    volume: state.volume
  };
};

const mapDispatchToProps = dispatch => {
  return {
    adjustVolume: function(e) {
      dispatch(setVolume(e.target.value / 100));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VolumeSlider);
