const ipcMain = require('electron');

module.exports.new = function () {
  ipcMain.on('newCanvas', (event) => {
    event.sender.send('newCanvas', );
  });
};
