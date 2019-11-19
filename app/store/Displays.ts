import { remote, Display } from "electron";

const { screen, BrowserWindow } = remote;

let displays = screen.getAllDisplays();

const SET_DISPLAYS = "SET_DISPLAYS";

export { SET_DISPLAYS };

export default {
  state: {
    displays
  },
  reducers: {
    [SET_DISPLAYS]: (global, dispatch, displays: Display[]) => ({
      displays
    })
  }
};
