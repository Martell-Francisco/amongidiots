import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import '../Home.css';


function CheckImposter (){
   // const navigate = useNavigate()
    const [age, setAge] = useState("not a imposter")

    return (
        <div className="backgroundImage" >
            <img className='headerPhoto' src={"images/theaterRoom.png"} alt="HeaderImg" />
                <label>
                <input
                value={age}
                onChange={e => setAge(e.target.value)}
                type="number"
                />
                </label>
            <p>
                Imposter? {age}
            </p>
            
           
        </div>
        

    )
}
export default CheckImposter
//<button className="backButton" onClick={() => navigate(-1)}>go back</button>