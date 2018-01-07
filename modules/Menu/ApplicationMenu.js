const { Menu } = require('electron');
const fileTemplate = require('./file/fileTemplateMenu');
const developerTemplate = require('./developer/developerTemplateMenu');

const menuTemplate = [
  {
    label: 'File',
    submenu: fileTemplate,
  },
  {
    label: 'Developer',
    submenu: developerTemplate,
  },
];

const menu = Menu.buildFromTemplate(menuTemplate);

module.exports = menu;
