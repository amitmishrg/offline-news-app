import React, { Component } from 'react'

import { ArticleContext } from "../../context/article";
import style from './index.scss';

class Navigation extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    static contextType = ArticleContext;

    render() {
        
        let active = this.context;
        
        return (
            <nav>
                <ul>
                    <li onClick={this.props.getCategoryArticle.bind(null, 'business')} className={active === 'business' ? 'active' : null}>business</li>
                    <li onClick={this.props.getCategoryArticle.bind(null, 'entertainment')} className={active === 'entertainment' ? 'active' : null}>entertainment</li>
                    <li onClick={this.props.getCategoryArticle.bind(null, 'health')} className={active === 'health' ? 'active' : null}>health</li>
                    <li onClick={this.props.getCategoryArticle.bind(null, 'science')} className={active === 'science' ? 'active' : null}>science</li>
                    <li onClick={this.props.getCategoryArticle.bind(null, 'sports')} className={active === 'sports' ? 'active' : null}>sports</li>
                    <li onClick={this.props.getCategoryArticle.bind(null, 'technology')} className={active === 'technology' ? 'active' : null}>technology</li>
                </ul>
            </nav>
        )
    }   
    
}

export default React.memo(Navigation);