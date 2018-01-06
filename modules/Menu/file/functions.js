const window = require('electron').BrowserWindow;

module.exports.new = function () {
  const focusedWindow = window.getFocusedWindow();
  focusedWindow.webContents.send('asynchronous-reply', true);
};

module.exports.reload = function () {
  const win = window.getFocusedWindow();
  win.loadURL('http://localhost:8080');
};
