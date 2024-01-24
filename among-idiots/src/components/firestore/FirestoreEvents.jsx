import React, {useEffect, useState} from "react";
import { onSnapshot } from "firebase/firestore";
import { planCollRefEvent } from "./PlannerColRef";
import DisplayEvent from "./DisplayEvent";
import "../Planner.css"




export default function FirestoreEvents (){
    const [posts, setPost] = useState([])
    

    useEffect(() => {
        const unsubscribe = onSnapshot(planCollRefEvent, snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return () => {unsubscribe()}
    },[])
    return(
        <div >
            <ul className="chalkBoard">
                {posts.map(post =>(
                    <div key = {post.id} >
                        <DisplayEvent 
                        id={post.id} 
                        title={post.data.title} 
                        message={post.data.message}
                        date= {post.data.date.toDate().toDateString()}
                        time= {post.data.date.toDate().toTimeString()}
                        />
                        -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -
                    </div>
                    
                ))}
            </ul>
        </div>
    )

}