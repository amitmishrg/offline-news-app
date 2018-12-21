import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import style from './index.scss';

 const Header = () => {
    return (
        <header>
            <h1><Link to="/">News App</Link></h1>
        </header>
    )
}

export default React.memo(Header);