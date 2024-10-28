import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

export default function TodoList() {
const [data,setdata]=useState([])
const [inputdata,setinputdata]=useState("")


const handleapi =async ()=>{
let res = await axios.get("http://localhost:3000/todoList")
setdata(res.data)
}
useEffect(()=>{
  handleapi()
},[])


console.log(data)

const handledelet=async(id)=>{
let res = await axios.delete(`http://localhost:3000/todoList/${id}`)
alert("deleted successfully")
  handleapi()

}
const handleinput=(e)=>{
setinputdata(e.data.value)
}


const handleadd=async()=>{
if(inputdata.trim()==="")
  alert("please enter the task");
return;
}



  return (
    <div className='m-3'>
      <h1>todo list</h1>
      <input onChange={handleinput} placeholder='enter ur todo' />
      <button onClick={handleadd}  className='btn btn-primary ms-3'>add</button>

    {data.map((da,i)=>(
<div className='d-flex mt-5' key={i}>
 
<h2> {(i=i+1)}.{da.task.value}</h2>
<span ><FaEdit /></span>
<span onClick={()=>handledelet(da.id)}><MdDeleteOutline /></span>
</div>

    ))}

</div>
)}


// {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: {
//       rate: 3.9,
//       count: 120
//   }