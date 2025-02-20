import { useState } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';


const Search = ()=>{
    const[Search , setSearch] = useState([]);
    const [input , setinput] = useState("");


    console.log(input)
   const Handelsubmit = async()=>{
         let api = "http://localhost:8000/employee/search";
        const response = await axios.post(api,{empno:input})
        console.log(response.data);
        setSearch(response.data);
        alert("Data search succefully")
      
   }
    
   let sno = 0;
   const ans = Search.map((key)=>{
    sno++
    return(
        <>
        <tr>
            <td>{sno}</td>
            <td>{key.name}</td>
            <td>{key.empno}</td>
            <td>{key.designation}</td>
            <td>{key.city}</td>
            <td>{key.salary}</td>
        </tr>
        </>
    )
   })

    return(
        <>
        <h1>Welcome Search page </h1>
        Enter Empno : <input type="text" value={input} onChange={(e)=>{setinput(e.target.value)}}/>
        <button onClick={Handelsubmit} > Search</button>
        <hr  size="4" color="red" />
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>sno</th>
          <th>Employee number</th>
          <th>Employee Number</th>
          <th>Designation</th>
          <th>City</th>
          <th>Salary</th>
        </tr>
        {ans}
      </thead>
      </Table>
        </>
    )
}

export default Search;