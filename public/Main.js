const {app, BrowserWindow } = require('electron')

function createWindow () {
  //create browser window
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }

  })

  //load index.html file
  win.loadURL('http://localhost:3000/')
  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}
app.on('ready',createWindow)
app.on('window-all-closed', () => {
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if(win == null) {
    createWindow()
  }
})
