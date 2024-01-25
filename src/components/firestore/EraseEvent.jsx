import React from "react";
import { doc, deleteDoc} from "firebase/firestore"; 
import { db } from "../../firebaseConfig";
import "../Planner.css";


export default function EraseEvent (props){
    const eraseEvent =()=>{
        const docRef =  doc(db, "Events", props.id)
        deleteDoc(docRef)
        .then(()=> console.log("Post Deleted"))
        .catch(error => console.log(error.message))
    };

      return(
        <div>
             <button onClick={eraseEvent} className="eraseEvent">&#091;erase event&#093; </button>
        </div>
                   
      )
};
// Add a new document with a generated id.
