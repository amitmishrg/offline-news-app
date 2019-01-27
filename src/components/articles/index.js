import React, { Component } from 'react'

import { ArticleContext } from "../../context/article";
import {DOMContentLoaded} from "../../utils/index";
import placeholder from "../../../assets/images/placeholder.png";
import style from './index.css';

class Article extends React.PureComponent {
    
    static contextType = ArticleContext;

    componentDidMount() {
        DOMContentLoaded();
    }
    
    render() {
        let article = this.context;

        return (
            <div className="article">
                <img className="lazy" data-src={article.urlToImage} data-srcset={article.urlToImage} src={placeholder} />
                <div className="info">
                    <h2><a href={article.url}>{article.title}</a></h2>
                    <p>{article.description }</p>
                </div>
            </div>
        )  
    }
}

export default React.memo(Article);