import { createContext, useState } from "react";
const mylogcontext = createContext();
const LoginContext = ({children})=>{
    const [user , setuser] = useState({name:"",auth:false});
    const login =(nm)=>{
        setuser({name:nm, auth:true})
    }
    const logout = ()=>{
        setuser({name:"", auth:false})
    }
    return(
        <>
        <mylogcontext.Provider value={{user, login, logout}}>
            {children}
        </mylogcontext.Provider>
        
        </>
    )
}
export default LoginContext;
export {mylogcontext};