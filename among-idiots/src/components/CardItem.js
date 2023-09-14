import React from "react";
import { Link } from "react-router-dom";

function CardItem (){
    return (
        <>
            <li className="cards_item">
                <Link className="cards_item_link">
                    <figure className="cards_item_pick-wrap">
                        <img src="/" alt="Travel Images" className="cards_item_img"/>
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards_item_text">

                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem