const electron = require("electron");
const url = require("url");
const path = require("path");


const { app, BrowserWindow } = require("electron");

//Serial Port
const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM3', baudRate: 9600 })
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))

//Penceremizi tanımladık.
let window;
//Uygulama hazır
app.on("ready", () => {
    //Penceremizi tanımladık
    window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });
    //Penceremizi yüklüyoruz
    window.loadURL(url.format({
        pathname: path.join(__dirname, "front/index.html"),
        protocol: "file:",
        slashes: true
    }))
});

parser.on('data', (data) => {
    window.webContents.send("data:pot", data);
});