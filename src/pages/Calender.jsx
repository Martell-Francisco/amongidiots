import React from "react";
import { useNavigate } from "react-router-dom";
import UserDetails from "../components/auth/UserDetails";
import '../Home.css';


function Calender (){
    const navigate = useNavigate()
        
    return (

        <div className="backgroundImage" >
            <img className='headerPhoto' src={"images/AmongIdiotsFrame.png"} alt="HeaderImg" />
            <div className="calender">
            <UserDetails />
            <div className="buttonContainer">
                <button className="backButton" >
                    <img className="go-home-button-img" onClick={() => navigate("/")} src={"images/ReturnHome.png"} alt="my ima"/>
                </button>
            </div>
            </div>
            <button className="secretB" onClick={() => navigate("/SecretSignUpPage")}>Are You Curious?</button>

        </div>
        

    )
}
export default Calender