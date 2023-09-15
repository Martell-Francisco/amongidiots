import React from "react";
import { useNavigate } from "react-router-dom";
import TheaterGroup from "../components/TheaterGroup";
import '../Home.css';


function Tobistheater (){
    const navigate = useNavigate()
    return (
        <div className="backgroundImage" >
            <img className='headerPhoto' src={"images/theaterRoom.png"} alt="HeaderImg" />
            <TheaterGroup/>
            <button className="backButton" onClick={() => navigate(-1)}>go back</button>
        </div>
        

    )
}
export default Tobistheater