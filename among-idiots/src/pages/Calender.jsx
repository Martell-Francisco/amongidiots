import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import UserDetails from "../components/auth/UserDetails";
import Planner from "../components/Planner";
import '../Home.css';


function Calender (){
    const navigate = useNavigate()
    const [flop, flipflop] = useState(true)
    function flipper(){
        flipflop(!flop)
    }
        
    return (

        <div className="backgroundImage" >
            <div className="scroller">
            <img className='headerPhoto' src={"images/AmongIdiotsFrame.png"} alt="HeaderImg" />
            <div className="flipContainer">
                {flop? <SignIn/> : <SignUp/> }
            </div>
            <UserDetails />
            {flop? <Planner/>: null}
            <div className="buttonContainer">
                <button onClick={flipper}>Switch</button>
                <button className="backButton" >
                    <img className="go-home-button-img" onClick={() => navigate(-1)} src={"images/ReturnHome.png"} alt="my ima"/>
                </button>
            </div>
            </div>

        </div>
        

    )
}
export default Calender