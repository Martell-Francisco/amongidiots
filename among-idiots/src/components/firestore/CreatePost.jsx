import React,{useState} from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebaseConfig";
import { auth } from "../../firebaseConfig";


export default function CreatePost (){
    const [comment, setComment] = useState("")
    const createPost =(e)=>{
        e.preventDefault();
        addDoc(collection(db, "planner"), {
            comment: comment,
            likes: [],
            creator: auth.currentUser.displayName
          });
          setComment("")
    };

      return(
        <div>
                    <form onSubmit={createPost}>
                    <input 
                    type="comment" 
                    placeholder="Type Here Losers"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></input>
                    <button className="submit">Create Post</button>

                    </form>
                </div>
      )
};
// Add a new document with a generated id.
