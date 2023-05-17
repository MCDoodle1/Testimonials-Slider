import React from "react";
import '../Button/Button.css';
import iconPrev from '../../images/icon-prev.svg';
import iconNext from '../../images/icon-next.svg';


export default function Button( {handleClickUp, handleClickDown, handleKeyPress} ) {
    
    return (
          <div className="button-container">
            <button 
                className="image-button left" 
                onClick={handleClickDown} 
                onKeyDown={handleKeyPress}><img src={iconPrev} alt="" />
            </button>
            <button 
                className="image-button right" 
                onClick={handleClickUp} 
                onKeyDown={handleKeyPress}><img src={iconNext} alt="" />
            </button>
        </div>  
    )
}
