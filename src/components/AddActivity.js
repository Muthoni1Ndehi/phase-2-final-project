import React from 'react'

function AddActivity() {
  return (
    <div className='Daily activity'>
        <form className='Daily activity form'>
            <div className='input'>
                 <input type="date" name="date"/>
                 <input type="text" name="category"/>
                 <input type="time" name="Time"/>
                 <input type="text" name="Activity"/>
            </div>
            <button className='Form Buttton' type="submit">
                Add activity
            </button>
        </form>
    </div>
  )
}

export default AddActivity