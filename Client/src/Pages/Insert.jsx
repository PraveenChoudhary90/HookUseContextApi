import { useState } from "react";
import axios from "axios"

const Insert = ()=>{
    const [input, setInput]= useState({});


    const Handelinput =(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }

    const HandelSubmit =async ()=>{
        let api = "http://localhost:8000/user/insert";
        try {
            let response = await axios.post(api,input);
            console.log(response);
            alert("data save")
            
        } catch (error) {
            console.log(error)
            
        }

    }
    return(
        <>
    <h1>Welcome to Insert</h1>
    Enter Username :<input type="text" name="username" value={input.username} onChange={Handelinput}/><br/>
    Enter Email :<input type="text" name="email" value={input.email} onChange={Handelinput}/><br/>
    Enter Firstname :<input type="text" name="firstname" value={input.firstname} onChange={Handelinput}/><br/>
    Enter Lastname :<input type="text" name="lastname" value={input.lastname} onChange={Handelinput}/><br/>
    <button onClick={HandelSubmit} >save!!!</button>
        </>
    )
}

export default Insert;