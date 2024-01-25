import React from "react";
import EraseEvent from "./EraseEvent";
import "../Planner.css"


export default function DisplayEvent (props){
    return (
        <div >
            <div className="displayTitle">{props.title}<br/><br/></div>
            <div className="displayMessage">
            {props.message} 
            </div>
            <div className="displayEventTime">
                 Event Date:  {props.date} at {props.time}
            </div>
            
            
            <EraseEvent id={props.id}/>        
        </div>
    )
}