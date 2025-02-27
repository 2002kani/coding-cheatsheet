import React from 'react'
import './App.css'

const cheatsheet = [
  { command: 'console.log()', description: 'Gibt etwas in der Konsole aus' },
]

export default function App() {
  return (
    <div className="app-container">
      {/* Dragbarer Header-Bereich */}
      <div 
        className="drag-area"
        style={{ zIndex: 1000 }}
      ></div>

      <h2 className="title">🚀 JavaScript Cheatsheet</h2>
      
      {/* Schließen- und Minimieren-Buttons */}
      <div className="window-controls">
        <button 
          onClick={() => window.electronAPI.minimizeWindow()}
          className="minimize-button"
        >
          –
        </button>
        <button 
          onClick={() => window.electronAPI.closeWindow()}
          className="close-button"
        >
          ×
        </button>
      </div>

      {/* Cheatsheet-Content */}
      <ul className="cheatsheet-list">
        {cheatsheet.map((item, index) => (
          <li key={index} className="cheatsheet-item">
            <code className="command">{item.command}</code>
            <span className="description">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
