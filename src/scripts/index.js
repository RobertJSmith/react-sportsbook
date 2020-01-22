import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import '../styles/index.scss';

import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();