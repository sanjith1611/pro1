

import React,{useEffect, useState} from "react";

function ApiCallWithBtn(){
const [data,setdata]= useState([])

const handleapi =async ()=>{
let res = await fetch("https://fakestoreapi.com/products")
let apidata =await res.json()
setdata(apidata)
}


return(
<>
<button onClick={handleapi}>click</button> 
{data.map((da)=>(
    
<div>
<img height={200}width={200} src={da.image}/>
<h2>{da.title}</h2>
<h3>{da.price}</h3>

</div>


))}








</>




)

}
export default ApiCallWithBtn;
