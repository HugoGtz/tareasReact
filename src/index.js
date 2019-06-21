import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'
import 'antd/dist/antd.css'

const firebaseConfig = {
    apiKey: "AIzaSyBkQv96dxkqo4eokr7MB0-MIVSuiyg-UH4",
    authDomain: "cursillo-70c79.firebaseapp.com",
    databaseURL: "https://cursillo-70c79.firebaseio.com",
    projectId: "cursillo-70c79",
    storageBucket: "",
    messagingSenderId: "433965611313",
    appId: "1:433965611313:web:56e71a15a7e19985"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();