import React,{useState} from "react";
import { collection, addDoc ,Timestamp } from "firebase/firestore"; 
import { db } from "../../firebaseConfig";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default function CreateEvent (){
    const [comment, setComment] = useState("")
    const [title, setTitle] = useState("")
    const [date, setDate] = useState(new Date());
    const createEvent =(e)=>{
        e.preventDefault();
        addDoc(collection(db, "Events"), {
            message: comment,
            date: Timestamp.fromDate(date),
            title: title
          });
          setComment("")
          setTitle("")
    };

      return(
        <div >
                    <form onSubmit={createEvent} className="modalContent">
                    <input 
                    className="eraseEvent"
                    type="title" 
                    placeholder="Title : "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
                <textarea 
                placeholder="Description of Event  :  "
                className="eraseEvent"
                rows="4" 
                cols="50" 
                name="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                ></textarea>
               <div>
                <div className="eraseEvent">Event Date :  </div>
               <DatePicker
                className="eraseEvent"
                    showTimeSelect
                    selected={date}
                    onChange={date => setDate(date)}
                  />
               </div>
                
                    <button className="submit">&#091;Create Event&#093;</button>

                    </form>
                </div>
      )
};
// Add a new document with a generated id.
