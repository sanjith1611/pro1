
import React from 'react'
import { useForm } from 'react-hook-form'

export default function ReactFormHook() {
const{register,handleSubmit,formState:{errors}} = useForm()
const handleform=(data)=>{
 console.log(data)
}
// console.log(errors)
return(

    <div>
     
    <label>Enyer your name :</label>
    <input {...register("firstname",{required:"Enter ur firstname"} )} placeholder='name'/><br /><br />    
   <p> {errors?.firstname?.message}</p>
    


      <label>Enyer your age :</label>
      <input {...register("age")} placeholder='age' /><br /><br />
      <button onClick={handleSubmit(handleform)} >submit</button>
    
    </div>

  )
}
