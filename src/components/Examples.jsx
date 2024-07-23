import React from "react"
export default function TabButton({children, onSelect}){

    return(
        <div>
            <li><button onClick={onSelect}>{children}</button></li>    
        </div>
    )
    
}
