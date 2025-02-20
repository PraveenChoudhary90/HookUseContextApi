import axios from "axios";
import { useEffect, useState } from "react";

const Display = ()=>{

    const [mydata, setmydata]= useState([]);


    const loaddata = async ()=>{
        const api = "http://localhost:8000/user/display";
        const response = await axios.get(api);
        console.log(response.data);
        setmydata(response.data);
    }
    useEffect(()=>{
        loaddata()
    },[])

    let ans = mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.firstname}</td>
                <td>{key.lastname}</td>
                <td>{key.userid.username}</td>
                <td>{key.userid.email}</td>
            </tr>
            </>
        )
    })
    return(
        <>
    <h1>Welcome to Display data page</h1>
    <table>
     <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Username</th>
        <th>Email</th>
     </tr>
     {ans}
    </table>
        </>
    )
}

export default Display;