import { app, BrowserWindow } from "electron";

function createWindow() {
    let win = new BrowserWindow({ width: 800, height: 600 });
    win.webContents.openDevTools();
    win.loadFile('public/administration.html');
}

app.on('ready', createWindow);