import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';

//Pages
import Main from './components/Main';
import App from './components/';
import Projects from './components/Projects/';
import Webpages from './components/Webpages/';

//data
import BioData from './data/Bio-Data';
import ProjectsData from './data/Projects-Data';
import SkillsData from './data/Skills-Data';
import WebPagesData from './data/WebPages-Data';

//import router
import { Router, Route, IndexRoute, browserHistory, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const logger = createLogger();

const defualtState = {
    BioData,
    ProjectsData,
    SkillsData,
    WebPagesData
}

const store = createStore(
    allReducers,
    defualtState
);

const routes =(
    <Route path = "/" component={App}>
        <IndexRoute component={Main} />
        <Route exact path="Projects" component={Projects} />
        <Route exact path="Webpages" component={Webpages} />
    </Route>
    );

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes = {routes} onUpdate={() => window.scrollTo(0, 0)}/>
    </Provider>,
    document.getElementById('root')
);

export default store;