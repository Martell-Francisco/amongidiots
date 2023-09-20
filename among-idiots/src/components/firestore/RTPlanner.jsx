import React, {useEffect, useState} from "react";
import { onSnapshot } from "firebase/firestore";
import { planCollRef } from "./PlannerColRef";
import DisplayPost from "./DisplayPost";




export default function RTPlanner (){
    const [posts, setPost] = useState([])
    

    useEffect(() => {
        const unsubscribe = onSnapshot(planCollRef, snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return () => {unsubscribe()}
    },[])
    return(
        <div >
            <ul className="planner">
                {posts.map(post =>(
                    <div key = {post.id}>
                        <DisplayPost id={post.id} likes={post.data.likes} comment={post.data.comment} creator ={post.data.creator}/>
                    </div>
                ))}
            </ul>
        </div>
    )

}