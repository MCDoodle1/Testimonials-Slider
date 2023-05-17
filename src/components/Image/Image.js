import React from "react";
import '../Image/Image.css';
import Button from '../Button/Button';


export default function Image( {image, handleClickUp, handleClickDown} ) {
    
    return (
        <div className="image-container">
            <img src={`../images/${image}` } alt="" />
            <Button 
            handleClickUp={handleClickUp}
            handleClickDown={handleClickDown}
            />
        </div>
    )
}