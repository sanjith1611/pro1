
import React,{useState} from "react";
import"./App.css";
import SideBar from "./Component/sidebar/SideBar";
import Main from "./Component/main/Main";
// import PropsExample from "./Component/PropsExample"
// import ApiCallWithBtn from "./Component/ApiCallWithBtn";
// import LifeCycleFunComp from "./Component/LifeCycleFunComp";
// import FormReact from "./Component/FormReact";





function App() {
// const[name,setname]=useState("sanjith")
// const[age,setage]=useState(21)
  return(
<>

{/* <PropsExample a={name} b={age}/> */}
{/* <ApiCallWithBtn/> */}
{/* <LifeCycleFunComp/> */}
{/* <FormReact/> */}

{/* <ReactHook/> */}
{/* <TodoList/> */}
<SideBar/>
<Main/>



</>





  )
}
export default App;