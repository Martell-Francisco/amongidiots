import React from "react";
import CardGroup from "../components/CardGroup";
import '../Home.css';


function Home (){
    
    
    return (
        <div className="backgroundImage" >
            <img  className='headerPhoto' src={"images/AmongIdiotsFrame.png"} alt="HeaderImg" />
            <CardGroup/>
        </div>
        

    )
}
export default Home

