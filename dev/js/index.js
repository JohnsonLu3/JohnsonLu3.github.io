import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';
import Main from './components/';

//data
import Bio from './data/Bio-Data';
import Projects from './data/Projects-Data';
import Skills from './data/Skills-Data';
import WebPages from './data/WebPages-Data';

//import router
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

const logger = createLogger();

const defualtState = {
    Bio,
    Projects,
    Skills,
    WebPages
}

const store = createStore(
    allReducers,
    defualtState
);
/*
const history = syncHistoryWithStore(browserHistory, store);

const router = (
    <Router history={history}>
        <Route path = "/" components={Main} />
    </Router>
)*/

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById('root')
);

export default store;