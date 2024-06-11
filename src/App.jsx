import { useState } from 'react'
import './App.css'

const todos = [
  {
    "id": 1,
    "todo": "Walking Dog",
    "isComplete": false
  },
  {
    "id": 2,
    "todo": "Do the laundary",
    "isComplete": false
  }
]
function App() {
  const [items, setItems] = useState(todos);
  const [isPopup , setIsPopup] = useState(false);
  const [text, setText] = useState('');
  
  const popupShow = () => {
    
  }
  
  const addItems = () => {
    todos.push({
      id: items.length + 1,
      todo: text,
      isComplete: false
    })
    
    setItems([...todos])
    setText('')
    setIsPopup(false)
  }
  
  return (
    <>
      <button onClick={() => setIsPopup(!isPopup)}>New Task</button>
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>{item.todo}</li>
          )
        })
        }
      </ul>
      { 
        isPopup && 
        <div>
        <input value={text} onChange={(el) => setText(el.target.value)}/>
        <button onClick={addItems}>Add</button>
        <button onClick={() => setText('')}>Reset</button>
        </div>
      }
    </>
  )
}

export default App
