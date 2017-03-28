'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory,IndexRoute,hashHistory} from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import * as reducers from './reducers';

import HomePage from './module/home-page';
import AboutPage from './module/about-page';
import ServicePage from './module/service-page';
import RecruitPage from './module/recruit-page';
import ContactPage from './module/contact-page';
import Header from './module/header';
import Footer from './module/footer';
import Deploy from './module/deploy';
import App from './module/app';

// const reducer = combineReducers({
//   ...reducers,
//   routing: routerReducer
// });
//
// const store = createStore(
//   reducer
// )
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    // <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={App} >
              <IndexRoute component={HomePage} />
              <Route path="home" component={HomePage}/>
              <Route path="home_header" component={Header} />
              <Route path="home_footer" component={Footer} />
              <Route path="about" component={AboutPage} />
              <Route path="about_backup" component={AboutPage} />
              <Route path="service" component={ServicePage} />
              <Route path="service_backup" component={ServicePage} />
              <Route path="recruit" component={RecruitPage} />
              <Route path="recruit_backup" component={RecruitPage} />
              <Route path="contact" component={ContactPage} />
              <Route path="contact_backup" component={ContactPage} />
              <Route path="deploy" component={Deploy} />
              <Route path="deploy_backup" component={Deploy} />
          </Route>
      </Router>
    // </Provider>
  ,document.getElementById('firstgrid_admin')
);
