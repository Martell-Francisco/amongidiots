import React from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import UserDetails from "../components/auth/UserDetails";
import '../Home.css';


function Calender (){
    const navigate = useNavigate()
    return (
        
        <div className="backgroundImage" >
            <div className="scroller">
            <img className='headerPhoto' src={"images/AmongIdiotsFrame.png"} alt="HeaderImg" />
            <SignIn/>
            <SignUp/>
            <UserDetails/>
            <div className="buttonContainer">
                <button className="backButton" >
                    <img className="go-home-button-img" onClick={() => navigate(-1)} src={"images/ReturnHome.png"} alt="my ima"/>
                </button>
            </div>
            </div>

        </div>
        

    )
}
export default Calender