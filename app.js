//good to manage all your windows here
var app = require('app')
var BrowserWindow = require('browser-window')
var ipc = require('electron').ipcMain
// var ipc = require('ipc')
// (electron) ipc module is deprecated. Use require("electron").ipcMain instead.

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })
  mainWindow.loadURL('file://' + __dirname + '/main.html')
  mainWindow.openDevTools()

  var prefsWindow = new BrowserWindow({
    width: 400,
    height: 400,
    show: false
    //show: false to make sure the window doesnt show with app ready
  })
  prefsWindow.loadURL('file://' + __dirname + '/prefs.html')

  ipc.on('toggle-prefs', function () {
    if (prefsWindow.isVisible())
      prefsWindow.hide()
    else
      prefsWindow.show()
    
    //ipc.on when we get an event
    //now when we get a request for the window, the window will show
  })
})
