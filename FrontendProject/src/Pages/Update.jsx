import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";


const Update = ()=>{
    const [input, setInput] = useState([]);
    const navigate = useNavigate();
    console.log(input);
    const Loaddata = async()=>{
        const api = "http://localhost:8000/employee/Displaydata";
        const response = await axios.get(api)
        console.log(response.data);
        setInput(response.data);
        // alert("data aa gaya hai")
    }

    useEffect(()=>{
        Loaddata()
    },[])

    const Handeldelete =async (id)=>{
        const api = "http://localhost:8000/employee/delete";
        const response = await axios.post(api, {id:id}).then((res)=>{
        alert("data delete succefully")
        Loaddata();

        })
        
    }

      const HandelUpdate = (id)=>{
        navigate(`/edit/${id}`)
      }

    let sno=0;
    const ans = input.map((key)=>{
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
                <td onClick={()=>Handeldelete(key._id)}>delete</td>
                <td onClick={()=>HandelUpdate(key._id)}>update</td>
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>Welcome Update page </h1>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>sno</th>
          <th>Employee number</th>
          <th>Employee Number</th>
          <th>Designation</th>
          <th>City</th>
          <th>Salary</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
        {ans}
      </thead>
      </Table>
        </>
    )
}

export default Update;