import React from 'react'
import { useState } from 'react'

export default function FormReact() {
const[name , setname] = useState ("")
const[age ,setage]=useState("")

const handlename = (e)=>{
   setname(e.target.value) 
}
const handleage =(e)=>{
setage(e.target.value)
}

  return (
    <div>
      <label>Enyer your name :</label>
    <input onChange={handlename} placeholder='name'/><br /><br />



      <label>Enyer your age :</label>
      <input onChange={handleage} placeholder='age' /><br /><br />
      <button>submit</button>

<div>
<h2>name -{name}</h2>

 <h2>age -  {age}</h2>
</div>


    </div>
  )
}
