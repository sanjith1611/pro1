import React, { useEffect, useRef } from 'react'

export default function ErrorHandling() {
// const handleerror=()=>{
  try{
// code
  }catch(error){
// error
  }finally{
// common for both
  }
    
}



useRef


const inputref=useRef(null)
useEffect(()=>{
inputref.current.focus
})

  return (
    <div>
      <h1>Error ErrorHandling</h1>
      <input ref={inputref} type="text" placeholder='enter ur name' />
    </div>
  )
}
