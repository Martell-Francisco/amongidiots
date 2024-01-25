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
            <div className="buttonContainer">
                <button className="backButton" >
                    <img className="go-home-button-img" onClick={() => navigate("/")} src={"images/ReturnHome.png"} alt="my ima"/>
                </button>
            </div>
        </div>
    )
}
export default Tobistheater