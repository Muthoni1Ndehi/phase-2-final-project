import React from 'react'
import AddActivity from './AddActivity'
import SearchItem from './SearchItem' 
import ListActivities from './ListActivities'


function ToDoListContainer() {
  return (
    <div>
        <AddActivity/>
        <ListActivities/>
        <SearchItem/>
    </div>
  )
}

export default ToDoListContainer