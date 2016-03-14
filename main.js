//this handles all js for main.html window
//2 processes running - render process and main process
//require menu from the main process
var remote = require('remote')
var ipc = require('ipc')
//ipc which is similar to to remote
//requiring ipc direct for the renderer process, not from the main process
var Menu = remote.require('menu')

var menu = Menu.buildFromTemplate([
  {
    label: 'Electron',
    submenu: [
      {
        label: 'Prefs',
        click: function (){
          ipc.send('toggle-prefs')
        }
      }
    ]
  }
])
//helper function on the menu class
//pass in structured javascript object
//notice array of menu items
// label is the name of application

//now attach application to menu
Menu.setApplicationMenu(menu)
