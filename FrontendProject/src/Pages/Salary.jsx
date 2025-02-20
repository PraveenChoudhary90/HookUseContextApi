import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

const Salary = ()=>{
   let[input,setinput]=useState([])
    let sum=0;

     const loading= async()=>{

        const res=await axios.get("http://localhost:8000/employee/display")
        // console.log(res.data)
        setinput(res.data)
        
   
   }


     input.map(e=>sum+=e.salary)
        console.log(sum)
  

      useEffect(()=>{loading()},[])
    return(
        <>
        <h1>Welcome Salary page </h1>
        <h1>My Total Salary :{sum}</h1>
        </>
    )
}

export default Salary;