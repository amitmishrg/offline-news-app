import React, { Component } from 'react'
import style from './index.scss';

 const Navigation = (props) => {
     
    console.log('Navigation', props);
    return (
        <nav>
            <ul>
                <li onClick={props.getCategoryArticle.bind(null, 'business')} className={props.active === 'business' ? 'active' : null}>business</li>
                <li onClick={props.getCategoryArticle.bind(null, 'entertainment')} className={props.active === 'entertainment' ? 'active' : null}>entertainment</li>
                <li onClick={props.getCategoryArticle.bind(null, 'health')} className={props.active === 'health' ? 'active' : null}>health</li>
                <li onClick={props.getCategoryArticle.bind(null, 'science')} className={props.active === 'science' ? 'active' : null}>science</li>
                <li onClick={props.getCategoryArticle.bind(null, 'sports')} className={props.active === 'sports' ? 'active' : null}>sports</li>
                <li onClick={props.getCategoryArticle.bind(null, 'technology')} className={props.active === 'technology' ? 'active' : null}>technology</li>
            </ul>
        </nav>
    )
}

export default React.memo(Navigation);