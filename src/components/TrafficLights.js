import { useState } from "react"

// const TrafficLights = () => {
//     const [activeLight, setActiveLight] = useState(null)
//     const handleLightClick = color => {
//         return setActiveLight(color)
//     }

//     return (
//         <div className="active-lights">
//             <button className={`light ${activeLight === "red" ? "red" : "off"}`} onClick={()=>handleLightClick("red")}></button>
//             <button className={`light ${activeLight === "yellow" ? "yellow" : "off"}`} onClick={()=>handleLightClick("yellow")}></button>
//             <button className={`light ${activeLight === "green" ? "green" : "off"}`} onClick={()=>handleLightClick("green")}></button>

//         </div>
//     )
// }

// export default TrafficLights


const TrafficLights = () => {
const [activeLight, setActiveLight] = useState(null)
const handleLightClick = color => {
    setActiveLight(color)
}
    
    return ( 
        <div className="traffic-lights">
            <div className={`light ${activeLight === "red" ? "red" : "null"} `} onClick={()=>handleLightClick("red")}></div>
            <div className={`light ${activeLight === "yellow" ? "yellow" : "null"} `} onClick={()=>handleLightClick("yellow")}></div>
            <div className={`light ${activeLight === "green" ? "green" : "null"} `} onClick={()=>handleLightClick("green")}></div>
        </div>
    )
}
export default TrafficLights
