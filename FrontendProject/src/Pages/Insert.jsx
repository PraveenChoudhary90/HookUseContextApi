

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"
const Insert = ()=>{

    const [Input, setInput] = useState({});

    const HandelInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(values=>({...values, [name]:value}));
       console.log(Input);
    }

    const HandelSubmit =async (e)=>{
              e.preventDefault();
        let api = "http://localhost:8000/employee/insert";
        try {
          const response = await axios.post(api,Input).then((res)=>{
            alert("data is perfectlyy inserted");
            console.log(res.data);
        })   
        } catch (error) {
            console.log(error);
        }
       
    }
    return(
        <>
         <Form id='myfrom'>
        <h1>Welcome Insert page </h1>
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

export default Insert;