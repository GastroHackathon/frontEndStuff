import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MainComponentStore from './Stores/MainComponentStore';
import QuestionStore from './Stores/QuestionStore'
import UserProfileStore from './Stores/UserProfileStore'
import {Provider} from "mobx-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageStore from "./Stores/ImageStore";

const stores = {
    MainComponentStore,
    QuestionStore,
    UserProfileStore,
    ImageStore,
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
