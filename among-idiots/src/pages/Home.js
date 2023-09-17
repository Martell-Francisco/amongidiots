import React from "react";
import CardGroup from "../components/CardGroup";
import DadJoke from "../components/DadJoke";
import '../Home.css';


function Home (){
    
    return (
        <div className="backgroundImage" >
            <div className="scroller">
            <img className='headerPhoto' src={"images/AmongIdiotsFrame.png"} alt="HeaderImg" />
            <DadJoke/>
            <CardGroup/>
            
            </div>

        </div>
        

    )
}
export default Home

