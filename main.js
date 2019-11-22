const { app, BrowserWindow, Menu } = require("electron");

const path = require("path");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    minWidth: 1280,
    width: 1280,
    minHeight: 720,
    height: 720,
    icon: path.join(__dirname, "misc/img/app-icon.png")
  });

  // Menu.setApplicationMenu(null);

  mainWindow.loadURL(path.join("file://", __dirname, "/app/index.html"));

  mainWindow.on("closed", () => (mainWindow = null));
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
