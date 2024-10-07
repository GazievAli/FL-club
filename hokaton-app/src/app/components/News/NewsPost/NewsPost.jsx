import React from 'react';
import Image from "next/image";
import "./NewsPost.css"

function NewsPost({ post_title, isBig, post_content }) {
    return (
        <div className={ "post" + (!isBig ? " big" : "")}>
            <h1 className="post_h1">{ post_title }</h1>
            <p className="post_p">{ post_content }</p>
        </div>
    );
}

export default NewsPost;