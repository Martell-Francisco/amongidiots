import React from "react";
import CardGroup from "../components/CardGroup";
import TheaterGroup from "../components/TheaterGroup";
import '../Home.css';


function Home (){
    
    
    return (
        <div className="backgroundImage" >
            <img  className='headerPhoto' src={"images/AmongIdiotsFrame.png"} alt="HeaderImg" />
            <CardGroup/>
            <TheaterGroup/>
        </div>
        

    )
}
export default Home

