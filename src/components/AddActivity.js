import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

function AddActivity({ addTodo }) {
  const history = useHistory();
  const [newTodo, setNewTodo] = useState({
    category: "",
    date: "",
    time: "",
    Activity: ""
  })
  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNewTodo({
      ...newTodo, [name]: value
    })

  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3000/Todo', {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
    history.push('/')
    addTodo()

  }
  return (
    <div className='Daily activity'>
      <form onSubmit={handleSubmit} className="form">
         <label>DATE <input className='input' onChange={handleChange} type="date" name="date" /></label>
         <label>CATEGORY <input className='input' onChange={handleChange} type="text" name="category" /></label>
         <label>TIME<input className='input' onChange={handleChange} type="time" name="time" /></label>
         <label>ACTIVITY <input className='input' onChange={handleChange} type="text" name="Activity" /></label>

        <button className='button' type="submit">
          Add activity
        </button>
      </form>
    </div>
  )
}

export default AddActivity
