import React, { Component, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import style from './styles/global.css';

const Home = lazy(() => import('./containers/home'));
const About = lazy(() => import('./containers/about'));
const Contact = lazy(() => import('./containers/contact'));
const Notfound = lazy(() => import('./containers/not-found'));
const Header = lazy(() => import('./components/header'));
const Footer = lazy(() => import('./components/footer'));



const routing = (
    <Router>
        <div className="main">

            <Suspense fallback={<div></div>}>
                <Header />
            </Suspense>

            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path='/' component={About}/>
                    <Route path='/about' component={Home}/>
                    <Route path='/contact' component={Contact}/>
                    <Route component={Notfound} />
                </Switch>
            </Suspense>

            <Suspense fallback={<div></div>}>
                <Footer />
            </Suspense>

        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));