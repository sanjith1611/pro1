import React, { useEffect, useState } from 'react'

export default function LifeCycleFunComp() {
  const [count,setcount]=useState(0)

const handleadd=()=>{
  setcount(count+1)
}



useEffect(()=>{
  //mounting state
  console.log("sachin")
  //updating state(if u click (count) useeffect also call)

  return()=>{
//unmounting stage...if component closed (this return statemnte will be display)   Eg..banking app

  }
},[count])

  return (
    <div>
      <h1>sanjith -{count}</h1>
      <button onClick={handleadd}>add</button>
      
    </div>
  )
}







