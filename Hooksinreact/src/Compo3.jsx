import Compo4 from "./Compo4";

const Compo3 = (props)=>{
    return(
        <>
        <h1>Component 3:{props.nm}</h1>
        <Compo4 nm={props.nm} />
        </>
    )
}
export default Compo3;