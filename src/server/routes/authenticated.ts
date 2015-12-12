'use strict';

import * as express from 'express';

export function authenticatedRoutes() {
    let router = express.Router();

    router.route('/logout')
        .get((req: express.Request, res: express.Response) => {
            res.json({
                error: 'need implement api logout'
            });
        });

    return router;
}