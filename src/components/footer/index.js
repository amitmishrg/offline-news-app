import React, { Component } from 'react'
import style from './index.scss';

 const Footer = () => {
     console.log('Footer');
     
    return (
        <footer>
            <p>Simple news app</p>
        </footer>
    )
}

export default React.memo(Footer);