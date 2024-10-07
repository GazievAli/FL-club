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
                            <Card
                                key={index}
                                commandA={el.commandA}
                                commandB={el.commandB}
                                scoreA={el.scoreA}
                                scoreB={el.scoreB}
                            >
                                { el.text }
                            </Card>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Matches;