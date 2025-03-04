import React from 'react'
import './App.css'

const cheatsheet = [
  { title: "map()", description: "Returns new array, calling a provided function on every element in the array.", 
      code1: "const list = [1, 2, 3, 4];", 
      code2:"list.map((el) => el * 2);", code2Lösung:" // [2, 4, 6, 8]" },
  { title: "filter()", description: "Returns new array with all elements that pass the test function.", 
      code1: "const list = [1, 2, 3, 4];", 
      code2: "list.filter((el) => el % 2 === 0);", code2Lösung:" // [2, 4]" },
  { title: "reduce()", description: "Reduce the array to single value. Value returned by the function is stored in an accumulator.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2:"list.reduce((total, item) => total + item, 0);", code2Lösung:" // 15" },
  { title: "includes()", description: "Returns true if the given element is present in the array.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.includes(3);", code2Lösung:" // true", 
      code3: "list.includes(6);", code3Lösung:" // false" },
  { title: "find()", description: "Returns value of the first element in the array that satisfies provided testing function. Otherwise undefined.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.find((el) => el === 3);", code2Lösung:"// 3", 
      code3: "list.find((el) => el === 6);", code3Lösung:" // undefined" },
  { title: "pop()", description: "Removes the last element from an array and returns that element.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.pop();", code2Lösung: " // 5", 
      code3:" list;", code3Lösung:" // [1, 2, 3, 4]" },
  { title: "push()", description: "Appends new elements to the end of an array, and returns the new length.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.push(6);", code2Lösung:" // 6", 
      code3:" list;", code3Lösung:" // [1, 2, 3, 4, 5, 6]" },
  { title: "indexOf()", description: "Returns the first index at which a given element can be found in the array, or -1 if not present.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.indexOf(3);", code2Lösung:"// 2",
      code3:"list.indexOf(6);", code3Lösung:"// -1" },
  { title: "fill()", description: "Fill the elements in an array with a static value.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.fill(0);", code2Lösung: "// [0, 0, 0, 0, 0]" },
  { title: "shift()", description: "Removes the first element from an array and returns that element.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.shift();", code2Lösung:"// 1", 
      code3: "list;", code3Lösung: " // [2, 3, 4, 5]" },
  { title: "unshift()", description: "Adds new elements to the beginning of an array, and returns the new length.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.unshift(0);", code2Lösung: "// 6", 
      code3: "list;", code3Lösung: " // [0, 1, 2, 3, 4, 5]" },
  { title: "splice()", description: "Changes the contents of an array by removing or replacing existing elements & adding new elements.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.splice(1, 2);", code2Lösung: "// [2, 3]", 
      code3: "list;", code3Lösung: "// [1, 4, 5]" },
  { title: "join()", description: "Joins all elements of an array into a string.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.join(', ');", code2Lösung: "// 1, 2, 3, 4, 5" },
  { title: "reverse()", description: "Reverses the order of the elements in an array.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.reverse();", code2Lösung: "// [5, 4, 3, 2, 1]", 
      code3: "list;", code3Lösung: "// [5, 4, 3, 2, 1]" },
  { title: "sort()", description: "Sorts the elements of an array in place and returns the array.", 
      code1: "const array = [4, 1, 3, 2, 10];", 
      code2: "array.sort();", code2Lösung: "// [1, 10, 2, 3, 4]", 
      code3: "array.sort((a, b) => a - b);", code3Lösung: "// [1, 2, 3, 4, 10]" },
  { title: "some()", description: "Returns true if at least one element in the array passes the test implemented by provided function.", 
      code1: "const list = [1, 2, 3, 4, 5];", 
      code2: "list.some((el) => el === 3);", code2Lösung: "// true",
      code3: "list.some((el) => el === 6);", code3Lösung: "// false" },
  { title: "Array.from()", description: "Creates a new array from an array-like or iterable object.", 
      code1: "const list = 😀😫😀😫🤪;", 
      code2: "Array.from(list);", code2Lösung: "// [😀, 😫, 😀, 😫, 🤪]" }
];

export default function App() {
  return (
    <div className="app">
      <div className="drag-area">
        <div className="window-controls">
          <button className='minimize-button'> – </button>
          <button className='close-button'> × </button>
        </div>
      </div>

      <h2 className='title'> Arraymethoden Cheatsheet 🚀  </h2>

      {cheatsheet.map((item, index) => (
       <div className="cheatsheet" key={index}>
        <p className='description'> <span>{item.title}</span> - {item.description}</p>
        <div className="code-area">
          <p>{item.code1}</p>

          {item.code2Lösung ? (
            <p>
              {item.code2} <span className="code-lösung">{item.code2Lösung}</span>
            </p>
          ) : (
            <p>{item.code2}</p>
          )}

          {item.code3 && (
            <p>
              {item.code3} {item.code3Lösung && <span className="code-lösung">{item.code3Lösung}</span>}
            </p>
          )}
        </div>
       </div>
      ))}
    </div>
  )
}
