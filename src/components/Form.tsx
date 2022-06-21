import React from 'react'
import useStore from './AppStore'

const Form = () => {

  const addTodo = useStore((state) => state.addTodo)
  const newTodo = useStore((state) => state.newTodo)
  const setNewTodo = useStore((state) => state.setNewTodo)

  // const [newTodo, setNewTodo] = useState("");


  function handleSubmit() {
    if (newTodo.length !== 0) {
      addTodo(newTodo)
    }

    setNewTodo("")
  }

  return (
    <>
      <div className="notetitle">
        <h1>To-Do List</h1>
      </div>
      <div className="add-item my-4">
        <input
          type="text"
          placeholder="✍️ Add Task...."
          name="task"
          value={newTodo as any}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <i className="fa-solid fa-plus fa-xl" onClick={handleSubmit}></i>
      </div>
    </>
  )
}

export default Form
