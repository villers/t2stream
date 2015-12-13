'use strict';

import {Router, Request, Response} from 'express';

export function authenticatedRoutes() {
    let router = Router();

    router.route('/logout')
        .get((req: Request, res: Response) => {
            res.json({
                error: 'need implement api logout'
            });
        });

    return router;
}