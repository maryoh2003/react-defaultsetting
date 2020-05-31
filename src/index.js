import React from 'react';
import ReactDOM from 'react-dom';
import Root from "./Root";
import './styles/typography/typography_scheme.scss';
import * as serviceWorker from './serviceWorker';
import 'focus-within-polyfill';

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
