const {app, BrowserWindow, Menu} = require('electron');
const menuTemplate = require('./modules/Menu/ApplicationMenu');
const path = require('path');
const url = require('url');
const {ipcMain} = require('electron')

let win;

function createWindow(){
    win = new BrowserWindow();
    win.maximize();

    win.on('closed', () => {
        win = null;
    });

    win.loadURL('http://localhost:8080');
  
    win.webContents.openDevTools()
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))
}
Menu.setApplicationMenu(menuTemplate);
app.on('ready', ()=>{
    setTimeout(createWindow, 5000);
});
