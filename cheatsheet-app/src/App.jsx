import React from 'react'
import './App.css'

/* Was ich im Frontend Brauche:
  - dragarea erstellen (nach code orientieren)
  - schließen und minimieren container erstellen
  - Cheatsheet anzeigen lassen (zB mit map)
*/

const cheatsheet = [
  { description: "Map - Returns new array, calling a provided function on every element in the array.", code: "const list = [😫, 😫, 😫, 😫] list.map((⚪️) => 😀); // [😀, 😀, 😀, 😀]" },
  {  },
  {  },
  {  },
  {  },
  {  },
  {  },
  {  },
  {  },
  {  },
  {  },
  {  },
  {  },
]

export default function App() {
  return (
    <div className="app">
      <h1> Array- / Stringmethods Cheatsheet </h1>
      {cheatsheet.map((item) => (
       <>
         <p>{item.description}</p>
         <p>{item.code}</p>
       </>
      ))}
    </div>
  )
}
