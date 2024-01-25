import React from "react";
import '../Home.css';
import SignUp from "../components/auth/SignUp";


function SecretSignUpPage (){
    return (
        <div className="backgroundImage" >
            <img className='headerPhoto' src={"images/theaterRoom.png"} alt="HeaderImg" />
            <div className="secretO">
                <SignUp/>
            </div>
                        
        </div>
    )
}
export default SecretSignUpPage