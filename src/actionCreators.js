import {
  ADJUST_VOLUME,
  UPDATE_DISPLAY_TEXT,
  SET_PRESSED_KEY,
  RESET_PRESSED_KEY
} from "./actionTypeConsts";

export function setVolume(volume) {
  return {
    type: ADJUST_VOLUME,
    payload: volume
  };
}

export function updateDisplayText(text) {
  return {
    type: UPDATE_DISPLAY_TEXT,
    payload: text
  };
}

export function setPressedKey(key) {
  return {
    type: SET_PRESSED_KEY,
    payload: key
  };
}

export function resetPressedKey() {
  return {
    type: RESET_PRESSED_KEY
  };
}
