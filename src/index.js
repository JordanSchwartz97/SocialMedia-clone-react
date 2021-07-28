import React from 'react';
import ReactDOM from 'react-dom';
import AppHooks from './components/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
=======

>>>>>>> 63ed5bf7b4bb7b010d48fa9830750658b43119a7
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';




//const jsxElement = <h1>Our React App</h1>;
//console.log(jsxElement);

ReactDOM.render(
    <Router>
        <React.StrictMode>
            <AppHooks/>
        </React.StrictMode>
    </Router>, 
    document.getElementById('root')
);