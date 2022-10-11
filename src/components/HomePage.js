import React from 'react'
import ListActivities from './ListActivities'

function HomePage({todo}) {
  console.log(todo)
  const listTodo=todo.map((everyTodo)=>(
    <tr>
      <td>{everyTodo.Activity}</td>
       <td>{everyTodo.category}</td>
       <td>{everyTodo.date}</td>
       <td>{everyTodo.time}</td>
    </tr>
  ))

  return (
    <div>

      <ListActivities list={listTodo}/>
     

    </div>
  )
}

export default HomePage