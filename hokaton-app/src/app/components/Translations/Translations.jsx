import React from 'react';
import {components, main} from "@/app/server/data/data";
import NewsPost from "@/app/components/News/NewsPost/NewsPost";
import "./Translations.css"

function Translations() {
    return (
        <section className="main">
            <div className="container">
                <div className="container_translation">
                    translation
                </div>
                <div className="comments">
                    <h1 className="header">Читать новости</h1>
                    {
                        components.HomePage.news.length !== 0 ?
                            components.HomePage.news.map((el, index) => {
                                return (
                                    <NewsPost key={index} post_content={el.content} post_title={el.title}/>
                                )
                            })
                            : <h1>Новостей нет!</h1>
                    }
                </div>
            </div>
        </section>
    );
}

export default Translations;