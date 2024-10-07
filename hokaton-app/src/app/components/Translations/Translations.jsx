import React from 'react';
import NewsPost from "@/app/components/News/NewsPost/NewsPost";
import "./Translations.css"

function Translations({ body, isTranslation }) {
    return (
        <section className="main">
            <div className={ "container" + (!isTranslation ? " big" : "")}>
                {
                    isTranslation ?
                        <div className="container_translation">
                            translation
                        </div> : ""
                }
                <div className={ "comments" + (!isTranslation ? " big" : "")}>
                    <h1 className="header">Читать новости</h1>
                    <div className="container_post">
                        {
                            body.length !== 0 ?
                                body.map((el, index) => {
                                    return (
                                        <NewsPost
                                            key={index}
                                            isBig={isTranslation}
                                            post_content={el.content}
                                            post_title={el.title}
                                        />
                                    )
                                })
                            : <h1>Новостей нет!</h1>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Translations;