import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';


const Display = ()=>{
    const [mydata, setMydata] = useState([]);

    const loaddata = async()=>{
         let api = "http://localhost:8000/employee/display";
         const response = await axios.get(api);
         console.log(response.data);
         setMydata(response.data);
    }

    useEffect(()=>{
        loaddata()
    },[])
  
  let sno = 0;
     const ans = mydata.map((key)=>{
        sno++
        return(
            <>
            <tr>
                <td>{sno}</td>
                <td>{key.empno}</td>
                <td>{key.name}</td>
                <td>{key.designation}</td>
                <td>{key.city}</td>
                <td>{key.salary}</td>
            </tr>
            </>
        )
     })

    return(
        <>
        <h1>Welcome Display page </h1>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>sno</th>
          <th>Employee Number</th>
          <th>Employee Name</th>
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

export default Display;