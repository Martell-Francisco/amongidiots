import React from "react";
import RTPlanner from "./firestore/RTPlanner";
import CreatePost from "./firestore/CreatePost";

const Planner = (props) => {


    return(
        <div className="planner-container">
                <CreatePost />
                <div>
                    <RTPlanner/>
                </div>
        </div>
    )
}
export default Planner