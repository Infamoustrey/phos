const { app, BrowserWindow } = require("electron");

const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 1280,
    height: 720,
    frame: false
  });

  mainWindow.loadURL(path.join("file://", __dirname, "/app/index.html"));

  mainWindow.on("closed", () => (mainWindow = null));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
