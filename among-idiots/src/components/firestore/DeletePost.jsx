import React from "react";
import { doc, deleteDoc} from "firebase/firestore"; 
import { db } from "../../firebaseConfig";


export default function DeletePost (props){
    const deletePost =()=>{
        const docRef =  doc(db, "planner", props.id)
        deleteDoc(docRef)
        .then(()=> console.log("Post Deleted"))
        .catch(error => console.log(error.message))
    };

      return(
        <div>
             <button onClick={deletePost}>delete Post</button>
        </div>
                   
      )
};
// Add a new document with a generated id.
