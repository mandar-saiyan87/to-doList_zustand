import React, { useState } from 'react'
import useStore from './AppStore'

const TodoItem = () => {

  const todoList = useStore((state) => state.todoList)
  const removeTodo = useStore((state) => state.removeTodo)
  const handleStrike = useStore((state) => state.handleStrike)


  return (
    <>
      {todoList.map((todo, index) => {
        return (
          <div className='showitem' key={index}>
            <div className='showitemtext' onClick={() => handleStrike(index)} style={{ textDecoration: todo.status === 'complete' ? 'line-through' : '' }}>
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
