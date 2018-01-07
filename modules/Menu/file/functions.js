const window = require('electron').BrowserWindow;

module.exports.new = function () {
  const focusedWindow = window.getFocusedWindow();
  focusedWindow.webContents.send('newFile');
};
