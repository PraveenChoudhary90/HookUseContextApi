

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const Edit = ()=>{
     const navigate = useNavigate();
     const {id}=useParams();
     const [Input, setInput] = useState({});

    const HandelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
       console.log(Input);
    }


 const Loaddata = async()=>{
    const api = "http://localhost:8000/employee/Finddata";
    const response = await axios.post(api,{id:id});
    setInput(response.data);

 }

 useEffect(()=>{
    Loaddata()
 },[])

    const HandelSubmit =async (e)=>{
              e.preventDefault();
        let api = "http://localhost:8000/employee/Editdatasave";
          const response = await axios.post(api,Input).then((res)=>{
            alert("Updata data Suceesfully ");
            navigate("/update");
        })     
    }
    return(
        <>
         <Form id='myfrom'>
        <h1>Welcome Edit page </h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Full Name</Form.Label>
        <Form.Control type="text" name='name' value={Input.name} onChange={HandelInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Your Employee No</Form.Label>
        <Form.Control type="text" name='empno' value={Input.empno} onChange={HandelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Your Designation</Form.Label>
        <Form.Control type="text" name='designation' value={Input.designation} onChange={HandelInput} />
      </Form.Group>


       <Form.Group className="mb-3" controlId="formBasicEmailv">
        <Form.Label>Enter Your City</Form.Label>
        <Form.Control type="text" name='city' value={Input.city} onChange={HandelInput}  />
      </Form.Group>


       <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Your Salary</Form.Label>
        <Form.Control type="text" name='salary' value={Input.salary} onChange={HandelInput}  />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={HandelSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}

export default Edit;