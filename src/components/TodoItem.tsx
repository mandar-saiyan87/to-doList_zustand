import React, { useState } from 'react'
import useStore from './AppStore'

const TodoItem = () => {

  // Importing todo list and remove, handlestrike function from zustand store
  const todoList = useStore((state) => state.todoList)
  const removeTodo = useStore((state) => state.removeTodo)
  const handleStrike = useStore((state) => state.handleStrike)


  return (
    <>
      {todoList.map((todo, index) => {
        return (
          <div className='showitem' key={index}>
            <div className='showitemtext' onClick={() => handleStrike(index)} style={{ textDecorationLine: todo.status === 'complete' ? 'line-through' : '', textDecorationColor: "red", textDecorationThickness: '2px' }}>
              {todo.task}
            </div>
            <i className="fa-solid fa-trash-can fa-lg" onClick={() => removeTodo(index)}></i>
          </div>
        )
      })}

    </>
  )
}

export default TodoItem
