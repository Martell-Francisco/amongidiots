import React from "react";
import { useNavigate } from "react-router-dom";
import './Cards.css';

function Cards({cardurl, cardtitle, cardtext, navTo}) {
    const navigate = useNavigate()
    return(<div className="cards_container">
                <button onClick={() => navigate(navTo)} className="home-buttons">
                    <img className="home-button-img" src={cardurl} alt="my ima"/>
                </button>

                <div className="card-text">
                    <h1 className="card-title">{cardtitle}</h1>
                    <text className="card-des">{cardtext}</text>
                </div>   
    </div>)
}
export default Cards;