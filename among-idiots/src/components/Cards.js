import React from "react";
import CardItem from "./CardItem";
import './Cards.css';

function Cards() {
    <div className='cards'>
        <h1>Check These Out Baby</h1>
        <div className="cards_container">
            <div className="cards_wrapper">
                <ul className="cards_items">
                    <CardItem 
                    src='images/AmongIdiotsSign.png'
                    text="Explore the hidden awesom!!!"
                    label="Adventure"
                    path='/tobi'
                    />
                </ul>
            </div>
        </div>
    </div>
}
export default Cards;