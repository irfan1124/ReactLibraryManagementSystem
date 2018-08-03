import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import MainRoute from '../../shared/router'

const context = {}

const renderToString = (url, context, store) => {
    return ReactDOMServer.renderToString(
        <div id="app">
            <StaticRouter location={url} context={context}>
                <MainRoute />
            </StaticRouter>
        </div>
    );
}

module.exports = (req, res, next) => {
    console.log('reached middleware: ', req.url)
    res.render('index',{
        html: renderToString(req.url, context)
    });
}