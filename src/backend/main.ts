import { app, BrowserWindow } from "electron";

import { join } from "path";

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
    minWidth: 1280,
    width: 1280,
    minHeight: 720,
    height: 720,
    icon: join(__dirname, "misc/img/app-icon.png"),
    frame: false,
  });

  mainWindow.setMenu(null);

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:9000");
    mainWindow.webContents.openDevTools({ mode: "undocked" });
  } else {
    mainWindow.loadFile("index.html");
  }

  console.log(__dirname);

  mainWindow.on("closed", () => (mainWindow = null));
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
