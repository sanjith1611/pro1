import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ApiCallWithBtn() {
  const[data,setdata]=useState([]); 

const handleapi= async ()=>{
let res =await fetch("https://fakestoreapi.com/products")
let apidata =await res.json()
setdata(apidata  )
}
useEffect(()=>{
  handleapi()

},[])


  return (
    <div>
       {/* <button onClick={handleapi}>api data</button>  */}
      {data.map((da)=>(
<div>
    <img src={da.image} height={200} width={200}/>
<h1>{da.title}</h1>
<h4>{da.price}</h4>



</div>
      ))}
    </div>
  )
}
