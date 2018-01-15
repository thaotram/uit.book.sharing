import webpack from 'webpack';
import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackDev from './webpack.dev';
import logger from '../logger';

const webpackCompiler = webpack(webpackDev);

export default function(app) {
    process.env.NODE_ENV === 'development'
        ? app.use(webpackDevMiddleware(webpackCompiler, {
            stats: {
                hash: false,
                version: false,
                assets: false,
                chunks: false,
                modules: false,
                reasons: false,
                children: false,
                source: false,
                errors: false,
                errorDetails: false,
                warnings: false,
                publicPath: false
            },
            noInfo: false,
            logger: logger
        }))
        && app.use(webpackHotMiddleware(webpackCompiler))
        : app.use(express.static('dist/client'));
}