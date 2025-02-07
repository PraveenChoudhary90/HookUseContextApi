import { useContext, useState } from "react";
import { mylogcontext } from "./LoginContext";

const UnAuthapp =()=>{
    const [val , setvalue]= useState("");
    const {login} = useContext(mylogcontext);
    return(

        <>
    My Name : <input type="text" name="name" value={val} onChange={(e)=>{setvalue(e.target.value)}}></input>
      <button onClick={()=>{login(val)}} >Login</button>  
        
        
        </>
    )
}
export default UnAuthapp;