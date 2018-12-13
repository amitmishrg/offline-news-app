import React, { Component, lazy, Suspense } from 'react'
import axios from 'axios';

const Header = lazy(() => import('../../components/header'));
const Footer = lazy(() => import('../../components/footer'));
const Navigation = lazy(() => import('../../components/navigation'));
const Article = lazy(() => import('../../components/articles'));
const Loader = lazy(() => import('../../components/loader'));

import { ArticleContext } from "../../context/article";

import style from './index.scss';

 class Home extends Component {
     constructor(props) {
        super(props);
        this.state = {
            loader: true,
            articles: [],
            counter: 0,
            active: ''
        }
    }

    componentDidMount() {
        axios('http://localhost:5000/headlines?country=in')
        .then(response => {
            this.setState({ 
                articles: response.data.articles,
                loader: false
             });
        })
    }

    getCategoryArticle(cat) {        
        this.setState({
            loader: true,
            articles: [],
            active: cat
        });
        axios(`http://localhost:5000/headlines?country=in&category=${cat}`)
        .then(response => {
            this.setState({ 
                articles: response.data.articles,
                loader: false               
             });
        })
    }

    render() {
        let renderArticle = this.state.articles && this.state.articles.map((article, index) => {
            return (
                <Suspense key={index} fallback={<div>Article Component is loading...</div>}>
                    <ArticleContext.Provider value={article}>
                        <Article key={index}/>
                    </ArticleContext.Provider>
                </Suspense>
            )
        });
        return (
            <div className="main">

                <Suspense fallback={<div>Header Component is loading...</div>}>
                    <Header />
                </Suspense>

                <Suspense fallback={<div>Navigation Component is loading...</div>}>
                    <ArticleContext.Provider value={this.state.active}>
                        <Navigation getCategoryArticle={this.getCategoryArticle.bind(this)}/>
                    </ArticleContext.Provider>
                </Suspense>
                
                <div className="articles-container">
                    {this.state.loader ? <Suspense fallback={<div>Loader Component is loading...</div>}><Loader /></Suspense> : null}
                    {renderArticle}
                </div>
                
                <Suspense fallback={<div>Footer Component is loading...</div>}>
                    <Footer />
                </Suspense>
            </div>
        )
        
    }
}

export default Home;