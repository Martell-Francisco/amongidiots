import React from "react";
import './Theater.css';

const TheaterModal = ({open, onClose, vidUrl}) => {
    if(!open) return null
   
    return (
        <div className="overlay" onClick={onClose} >
            <div className="modal-container">
                <p onClick={onClose} className='closeBtn'>X</p>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={vidUrl} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        
        
    )
}
export default TheaterModal