const functions = require('./functions');

const fileMenuItens = [
  {
    label: 'New',
    role: 'new',
    click: () => {
      functions.new();
    },
    accelerator: 'CmdOrCtrl+N',
  },
  {
    label: 'Open...',
  },
  {
    label: 'Open Recent',
  },
  {
    type: 'separator',
  },
  {
    label: 'Save',
  },
  {
    label: 'Save As...',
  },
  {
    type: 'separator',
  },
  {
    label: 'Quit',
    role: 'quit',
  },
];

module.exports = fileMenuItens;
