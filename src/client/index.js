import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import MainRoute from '../shared/router';

window.onload = function () {
    console.log(document.getElementById('app'));
ReactDOM.hydrate( 
    <BrowserRouter>
        <MainRoute />
    </BrowserRouter>, 
    document.getElementById('app'));

}