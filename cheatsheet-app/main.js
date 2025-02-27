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
    width: 600,
    height: 400,
    alwaysOnTop: true,
    transparent: true,
    frame: false,
    webPreferences: {
      nodeIntegration: true,       // Ermöglicht die Verwendung von Node.js im Renderer-Prozess
      contextIsolation: true,       // Aktiviert Context Isolation für Sicherheit
      preload: path.join(__dirname, 'preload.js') // Lädt das Preload-Script
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