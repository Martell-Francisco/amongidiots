import React from "react";
//import QuotesArray from "../data/QuotesArray";
import './Quotes.css';
//import { Link } from "react-router-dom";

function Quotes (){
    const  Quotes = require("../data/QuotesArray")

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
    const randomNum = getRndInteger(0, Quotes.length)
    return(
        <div className="quotes-container">
            <div className="quotesImg">
                <div className="quotesText">
                {Quotes[randomNum]}
                </div>
            </div>
        </div>
        
        
    )
}

export default Quotes

