import React from "react";
import Cards from "./Cards";
import './Cards.css';
//import { Link } from "react-router-dom";

function CardGroup (){
    return (
        <div className="card-group-container">
            <Cards cardurl="./images/tobistheater.png"
                    cardtext="Watch Some Amazing trivia night games hosted by our one and only Tobi!"
                    cardtitle="Tobi's Movie Theater!"
                    navTo = "tobis-theater"
                    />
            <Cards cardurl="./images/tobistheater.png"
                    cardtext="Watch Some Amazing trivia night games hosted by our one and only Tobi!"
                    cardtitle="Tobi's Movie Theater!"
                    navTo = "Calender"
                    />

        </div>
    );
}

export default CardGroup