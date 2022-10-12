import React from 'react'

function ListActivities({list}) {
  return (
    <div>
      <tr className='row'>
      <th>Activity</th>
      <th>Category</th>
      <th>Date</th>
      <th>Time</th>
      </tr>
      {list}
    </div>
  )
}

export default ListActivities