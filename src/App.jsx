import './App.css'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import data from './data.json'
import React, { useState } from 'react'
import { v4 as uuid} from 'uuid'

/* creado por leox.dev */

function App() {

  const [todos, setTodos] = useState(data)

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? {...todo, completed: !todo.completed} : {...todo}
      })
    )
  }

  const onDelete = (id) => {
    setTodos(
      [...todos].filter(todo => todo.id!==id)
    )
    
  }

  const addTodo = (newTodo) => {
    console.log(newTodo)
    const newItem = [...todos].concat([{
      id: uuid(),
      task: newTodo,
      completed: false
    }] 
    )
    setTodos(newItem)
    console.log([...todos])
  }

  return(
    <section>
      <h1>To do List</h1>
      <TodoForm 
        addTodo={addTodo}
      />
      <TodoList 
        todos={todos}
        onComplete={onComplete}
        onDelete={onDelete}
      />
    </section>
  )
}

export default App
