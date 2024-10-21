import React, { useState } from 'react'

const TodoForm = () =>{
    const [value,setvalue]= useState("") 
const handlesubmit=()=>{
    
}

  return (
  
   <form className='m-5 todoForm'>

<input type="text" className='todo-input'placeholder='What is the task today' onChange={(e)=>{setvalue(e.target.value)}} />
<button type='submit' className=' btn- primary todo-btn'onSubmit={handlesubmit} >Add task</button>



   </form>
  )
}

export default TodoForm

