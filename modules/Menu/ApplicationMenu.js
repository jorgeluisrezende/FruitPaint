const { Menu } = require('electron');
const fileTemplate = require('./file/fileTemplateMenu');

const menuTemplate = [
  {
    label: 'File',
    submenu: fileTemplate,
  },
];

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = menu;
