import React from "react";
import '../Text/Text.css';


export default function Text( {name, job, quote} ) {
    return (
        <div className="text-container">
            <p className="quote">{quote}</p>
            <div className="personal">
                <p className="name">{name}</p>
                <p className="jobtitle">{job}</p>
            </div>
        </div>
    )
}