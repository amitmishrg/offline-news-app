import React, { Component } from 'react';
import LoadingImg from '../../../assets/images/loading.gif';
import style from './index.css';

const Loader = (props) => {
    
    return (
        <div className="loader">
            <img src={LoadingImg} />
        </div>
    )
}

export default React.memo(Loader);