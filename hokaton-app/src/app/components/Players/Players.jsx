import React from 'react';
import Player from "@/app/components/Players/player/Player";
import "./Players.css"

const Players = () => {
    const pl = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    return (
        <section className="players">
            <div className="container player">
                <div className="conatiner_blocks">
                    { pl.map((el, index) => {
                        return (
                            <Player key={index}/>
                        )
                    }) }
                </div>
            </div>
        </section>
    )
}

export default Players;