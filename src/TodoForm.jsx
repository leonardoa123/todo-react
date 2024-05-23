import React, { useState } from 'react'

function TodoForm({addTodo}) {

    const [userInput, setInput] = useState('')

    const handleOnChange = (e) => {
        setInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInput.trim() !== '') {
            addTodo(userInput)
            setInput('')
        }
    }

  return (
    <div className='input-box'>
      <form onSubmit={handleSubmit}>
        <input 
            placeholder='add a tak'
            className="add-input" 
            type="text" 
            value={userInput}
            onChange={handleOnChange}
        />
        <button>+</button>
      </form>
    </div>
  )
}

export default TodoForm
