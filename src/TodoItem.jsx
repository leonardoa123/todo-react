import React from 'react'

function TodoItem({todo, onComplete, onDelete}) {

  const getStyle = () => {
    return{
        textDecoration: todo.completed ? 'line-through' : 'none',
        
    }  
    }
  return (
    <li style = { getStyle() }>
        <input 
            className='check'
            type="checkbox" 
            checked={todo.completed} 
            onChange={ () => onComplete(todo.id) }/>
        <span>{todo.task}</span>
        <button onClick={() => onDelete(todo.id)}>
            <i className="fa-solid fa-trash"></i>
        </button>
    </li>
  )
}

export default TodoItem