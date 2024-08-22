import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {CreateTodo} from './components/CreateTodo'
import { Todo } from './components/Todo'

// we have to make to components...first to create todo and second is for displaying the list of todos...

function App() {
  const [todo, setTodo] = useState([]);

  // Method 1   --> Here we will get so much of fetch requests
  fetch("http://localhost:3000/todos")
    .then(async (res)=>{
      const json = await res.json();
      setTodo(json.todos);
    });

  // CORS error -> we can't hit multiple localhost servers simultaneously 


  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todo todos={todo}></Todo>
    </div>
  )
}

export default App
