import Compo3 from "./Compo3";

const Compo2 = (props)=>{
    return(
        <>
        <h1>Component 2:{props.nm}</h1>
        <Compo3 nm={props.nm}/>
        </>
    )
}
export default Compo2;