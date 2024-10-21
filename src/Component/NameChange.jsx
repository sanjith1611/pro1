import React, { useState } from "react";

function NameChange (){
   const [name,setname] = useState("sanjith")
    const ChangeOperation = () => {
        // setname("sachin")
    
if(name == "sanjith"){
    setname("sachin")
}
if(name == "sachin"){
    setname("sanjith")
}
    }

    return(
<>
<h1>{name}</h1><br /><br />
<button onClick={ChangeOperation}>change</button>
</>
    )
}
export default NameChange