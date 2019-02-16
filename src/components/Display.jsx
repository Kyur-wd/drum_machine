import React from "react";
import { connect } from "react-redux";

const Display = props => {
  return <output id="display">{props.displayText}</output>;
};

const mapStateToProps = state => {
  return {
    displayText: state.lastPlayedSoundName
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
