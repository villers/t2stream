'use strict';

import * as express from 'express';
import {config} from '../config/config';

export function anonymousRoutes() {
    let router = express.Router();

    router.route('/api')
        .get((req, res) => {
            res.json({
                name: config.name,
                version: config.version
            });
        });

    router.route('/api/login')
        .get((req, res) => {
            res.json({
                error: 'need implement api login'
            });
        });

    router.route('/api/register')
        .get((req, res) => {
            res.json({
                error: 'need implement api register'
            });
        });

    return router;
}