import React, {useState} from "react";
import TheaterModal from "./TheaterModal";
import './Theater.css';

function TheaterCard({cardTitle, des, vidUrl, thumbnailUrl}) {
    const [openModal, setOpenModal] = useState(false)
    return(
        <div className="theater-container">
            <button className="modal-button" onClick={() => setOpenModal(true)} >
                <img className="theater-button-img" src={thumbnailUrl} alt="my ima"/>
            </button>
            <div className="theaterText">
                <text className="theater-card-title">{cardTitle}</text>
                <p className="theater-card-des">{des}</p>
            </div>
            <TheaterModal open={openModal} onClose={()=>setOpenModal(false)} vidUrl={vidUrl}/>
        </div>
    )
}

export default TheaterCard