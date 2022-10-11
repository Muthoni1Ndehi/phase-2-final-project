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
      <form onSubmit={handleSubmit} className='Daily activity form'>
        <div className='input'>
         <label>DATE <input onChange={handleChange} type="date" name="date" /></label>
         <label>CATEGORY <input onChange={handleChange} type="text" name="category" /></label>
         <label>TIME<input onChange={handleChange} type="time" name="time" /></label>
         <label>ACTIVITY <input onChange={handleChange} type="text" name="Activity" /></label>
        </div>
        <button className='Form Buttton' type="submit">
          Add activity
        </button>
      </form>
    </div>
  )
}

export default AddActivity
