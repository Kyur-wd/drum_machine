import {
  ADJUST_VOLUME,
  UPDATE_DISPLAY_TEXT,
  SET_PRESSED_KEY,
  RESET_PRESSED_KEY
} from "../actionTypeConsts";

const initialState = {
  volume: 0.5,
  lastPlayedSoundName: "",
  pressedKey: ""
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADJUST_VOLUME:
      return Object.assign({}, state, { volume: action.payload });

    case UPDATE_DISPLAY_TEXT:
      return Object.assign({}, state, { lastPlayedSoundName: action.payload });

    case SET_PRESSED_KEY:
      return Object.assign({}, state, { pressedKey: action.payload });

    case RESET_PRESSED_KEY:
      return Object.assign({}, state, { pressedKey: "" });

    default:
      return state;
  }
}
