'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory,IndexRoute,hashHistory} from 'react-router';

import HomePage from './module/home-page';
import AboutPage from './module/about-page';
import ServicePage from './module/service-page';
import RecruitPage from './module/recruit-page';
import ContactPage from './module/contact-page';
import Header from './module/header';
import Footer from './module/footer';

class App extends React.Component{
    render(){
        return(
            <div>
                <Header current_path={this.props.location.pathname}/>
                {this.props.children}
                <Footer current_path={this.props.location.pathname}/>
            </div>
        )
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={HomePage} />
            <Route path="home" component={HomePage} />
            <Route path="about" component={AboutPage} />
            <Route path="service" component={ServicePage} />
            <Route path="recruit" component={RecruitPage} />
            <Route path="contact" component={ContactPage} />
        </Route>
    </Router>
  ,document.getElementById('firstgrid_front')
);
