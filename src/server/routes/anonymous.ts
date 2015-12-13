'use strict';

import {Router, Request, Response} from 'express';
import {config} from '../config/config';

export function anonymousRoutes() {
    let router = Router();

    router.route('/api')
        .get((req: Request, res: Response) => {
            res.json({
                name: config.name,
                version: config.version
            });
        });

    router.route('/api/login')
        .get((req: Request, res: Response) => {
            res.json({
                error: 'need implement api login'
            });
        });

    router.route('/api/register')
        .get((req: Request, res: Response) => {
            res.json({
                error: 'need implement api register'
            });
        });

    return router;
}