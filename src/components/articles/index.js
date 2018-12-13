import React, { Component } from 'react'
import style from './index.scss';

const Article = (props) => {
    console.log('Article');
    
    let { article } = props;
    let bg = {
        backgroundImage: `url(${article.urlToImage})`
    }
    return (
        <div className="article">
            <div className="thumbnail" style={bg}>
            </div>
            <div className="info">
                <h2><a href={article.url}>{article.title}</a></h2>
                <p>{article.description }</p>
            </div>
        </div>
    )
}

export default React.memo(Article);