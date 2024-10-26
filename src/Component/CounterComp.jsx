import React, {useState} from "react";



function CounterComp(){
 const [ticket,setticket] = useState(0);

const handleoperation = (ma)=>{
if(ma == "add"){
    setticket(ticket+1);
}       
if(ma == "sub"){
    setticket(ticket-1);
}
if(ma == "reset"){
  setticket(0); 
}
};




return(
    <>
   <h1 className="h1tag">jailer - {ticket}</h1><br /><br />
<button onClick={()=>handleoperation("add")}>add</button>
<button onClick={()=>handleoperation("sub")}>minus</button>
<button onClick={()=>handleoperation("reset")}>reset</button>

</>
)
}
export default CounterComp