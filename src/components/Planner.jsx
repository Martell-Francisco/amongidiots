import React from "react";
import RTPlanner from "./firestore/RTPlanner";
import FirestoreEvents from "./firestore/FirestoreEvents";
import CreatePost from "./firestore/CreatePost";

const Planner = (props) => {


    return(
        <div className="planner-container">
                
                <div>
                    <FirestoreEvents/> 
                    <CreatePost/>
                    <RTPlanner/>
                </div>
        </div>
    )
}
export default Planner