import React from "react";
import DeletePost from "./DeletePost";
import "../Planner.css"


export default function DisplayPost (props){
    return (
        <div className="displayContainer">
            From: {props.creator}
            <div className="displayComments">
            {props.comment} 
            </div>
            <div className="displayLikes">
            {props.likes} 
            </div>
            <DeletePost id={props.id}/>           
        </div>
    )
}