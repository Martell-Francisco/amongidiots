import React, {useEffect, useState} from "react";
import { onSnapshot } from "firebase/firestore";
import { planCollRefEvent } from "./PlannerColRef";
import DisplayEvent from "./DisplayEvent";
import "../Planner.css"
import Modal from 'react-modal';
import CreateEvent from "./CreateEvent";


Modal.setAppElement('#root');

export default function FirestoreEvents (){
    const [posts, setPost] = useState([])
    const [modalIsOpen, setIsOpen] = React.useState(false);
    
    function openModal() {
        setIsOpen(true);
      }
    
    //  function afterOpenModal() {
        // references are now sync'd and can be accessed.
    //  }
    
      function closeModal() {
        setIsOpen(false);
      }

    useEffect(() => {
        const unsubscribe = onSnapshot(planCollRefEvent, snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return () => {unsubscribe()}
    },[])
    if(Object.keys(posts).length===0)return(
        <div >
            <ul className="chalkBoard">
                No Events Planned
            </ul>
        </div>
    )
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
                <div>
      <button className="eraseEvent" onClick={openModal}>~~Add Event~~</button>
      <Modal
        isOpen={modalIsOpen}
        //onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Portal"
        className="modal"
      >
        
        <div className="eraseEvent">Event Creator</div>
        <div>
            
        <CreateEvent/>
            <button className="eraseEvent" onClick={closeModal}>&#091;close&#093;</button>
        </div>
        
      </Modal>
    </div>
            </ul>
        </div>
    )

}