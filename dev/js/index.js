import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';


//data
import Bio from './data/Bio-Data';
import Projects from './data/Projects-Data';
import Skills from './data/Skills-Data';
import WebPages from './data/WebPages-Data';


const defualtState = {
    Bio,
    Projects,
    Skills,
    WebPages
}

const logger = createLogger();
const store = createStore(
    allReducers,
    defualtState
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

export default store;