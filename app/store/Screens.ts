import { remote } from "electron";

const { screen, BrowserWindow } = remote;

let displays = screen.getAllDisplays();

let externalDisplay = displays.find(
  display => display.bounds.x !== 0 && display.bounds.y !== 0
);

let win;

if (externalDisplay) {
  (win = new BrowserWindow({
    x: externalDisplay.bounds.x,
    y: externalDisplay.bounds.y,
    width: externalDisplay.bounds.width,
    height: externalDisplay.bounds.height,
    frame: false,
    fullscreen: true
  })),
    win.loadURL("https://github.com");
  win.focus();
}

// console.log(displays);

export default { displays };
// export {

//   state: {

//   }

// }
