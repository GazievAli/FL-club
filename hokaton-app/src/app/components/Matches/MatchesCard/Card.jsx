import React from "react";
import "./Card.css"

const Card = ({ commandA, commandB, scoreA, scoreB, children }) => {
    if ((commandA || commandB || scoreA || scoreB || children) !== undefined || null) {
        return (
            <div className="Card">
                <h1 className="head_h1">{commandA} vs {commandB}</h1>
                <p className="score">
                    {scoreA > scoreB ? scoreA : scoreB} :
                    {scoreA > scoreB ? " " + scoreB : " " + scoreA}
                </p>
                <p className="text">
                    {children}
                </p>
            </div>
        )
    }
}

export default Card;