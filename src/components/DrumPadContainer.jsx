import React from "react";
import DrumPad from "./DrumPad";

const DrumPadContainer = props => {
  return (
    <React.Fragment>
      <DrumPad
        hotKey="Q"
        soundName="Heater-1"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      />
      <DrumPad
        hotKey="W"
        soundName="Heater-2"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      />
      <DrumPad
        hotKey="E"
        soundName="Heater-3"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      />
      <DrumPad
        hotKey="A"
        soundName="Heater-4"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      />
      <DrumPad
        hotKey="S"
        soundName="Clap"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      />
      <DrumPad
        hotKey="D"
        soundName="Open-HH"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      />
      <DrumPad
        hotKey="Z"
        soundName="Kick-n'-Hat"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      />
      <DrumPad
        hotKey="X"
        soundName="Kick"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      />
      <DrumPad
        hotKey="C"
        soundName="Closed-HH"
        playedSoundFileUrl="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      />
    </React.Fragment>
  );
};

export default DrumPadContainer;
