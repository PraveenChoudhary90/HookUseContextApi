import { useContext } from "react";
import { mylogcontext } from "./LoginContext";


const Authapp = ()=>{
const {user, logout}= useContext(mylogcontext)
    return(
        <>
        <h2>Welcome :{user.name}</h2>
        <button onClick={()=>{logout()}} >Logout</button>
        
        </>
    )
}
export default Authapp;