import Compo2 from "./Compo2";

const Compo1 = (props)=>{
    return(
        <>
        <h1>My Name is:{props.nm}</h1>
        <Compo2 nm={props.nm} />
        </>
    )
}
export default Compo1;