import { app, BrowserWindow, ipcMain } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import isDev from 'electron-is-dev'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let mainWindow

// IPC-Handler für Fenstersteuerung
ipcMain.on('close-window', () => {
  if (mainWindow) mainWindow.close()
})

ipcMain.on('minimize-window', () => {
  if (mainWindow) mainWindow.minimize()
})

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 460,
    height: 700,
    alwaysOnTop: true,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,       
      contextIsolation: true,       
      preload: path.join(__dirname, 'preload.js')
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