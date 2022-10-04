import React from 'react'
import AddActivity from './AddActivity'
import SearchItem from './SearchItem' 
import ListActivities from './ListActivities'
import EditActivity from './EditActivity'

function ToDoListContainer() {
  return (
    <div>
        <AddActivity/>
        <EditActivity/>
        <ListActivities/>
        <SearchItem/>
    </div>
  )
}

export default ToDoListContainer