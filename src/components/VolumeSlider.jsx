import React from "react";

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

export default VolumeSlider;
