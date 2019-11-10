const { app, BrowserWindow } = require("electron");
const path = require("path");

if (process.env.NODE_ENV === "development") {
    require("electron-debug")({
        showDevTools: true
    });
}

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 800,
        height: 600
    });

    mainWindow.loadURL(path.join("file://", __dirname, "/app/index.html"));

    mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", function() {
    if (mainWindow === null) {
        createWindow();
    }
});
