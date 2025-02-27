import { app, BrowserWindow } from 'electron'
import path from 'path'
import isDev from 'electron-is-dev'

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    alwaysOnTop: true,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:5173' // Vite Dev Server
      : `file://${path.join(__dirname, '../dist/index.html')}`
  )

  mainWindow.on('closed', () => (mainWindow = null))
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})