import React, { Component } from 'react'
import style from './index.scss';

 const Header = () => {
     console.log('Header');
    return (
        <header>
            <h1>News App</h1>
        </header>
    )
}

export default React.memo(Header);