import React, { Component } from 'react'

import { ArticleContext } from "../../context/article";
import {DOMContentLoaded} from "../../utils/index";

import style from './index.scss';

class Article extends React.PureComponent {
    
    static contextType = ArticleContext;
    
    render() {

        let article = this.context;
        let bg = {
            backgroundImage: `url(${article.urlToImage})`
        }

        return (
            <div className="article">
                <div className="thumbnail lazy-background" style={bg}>
                </div>
                <div className="info">
                    <h2><a href={article.url}>{article.title}</a></h2>
                    <p>{article.description }</p>
                </div>
            </div>
        )  
    }
}

export default React.memo(Article);