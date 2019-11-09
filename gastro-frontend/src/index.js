import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainComponentStore from './Stores/MainComponentStore';
import QuestionStore from './Stores/QuestionStore'
import {Provider} from "mobx-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const stores = {
    MainComponentStore,
    QuestionStore
};


ReactDOM.render((
    <Provider {...stores}>
        <App/>
    </Provider>
), document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
