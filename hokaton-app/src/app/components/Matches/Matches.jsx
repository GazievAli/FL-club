import React from 'react';
import "./Matches.css"
import Card from "@/app/components/Matches/MatchesCard/Card";

function Matches({ body }) {
    return (
        <section className="matches">
            <div className="container">
                {
                    body.map((el, index) => {
                        return (
                            <Card key={index}>{ el.date }</Card>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Matches;