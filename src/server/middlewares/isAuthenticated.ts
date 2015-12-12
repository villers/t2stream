'use strict';

import * as express from 'express';
import {codes, createError} from '../helpers/error';
import {getTokenFromRequest, validateToken} from '../helpers/token';

export function isAuthenticated(req: express.Request, res: express.Response, next: Function) {
    let token = getTokenFromRequest(req);

    // Token not exist
    if (!token) {
        return next(createError(codes.badRequest, 'No token provided.'));
    }

    // TODO Need implement
    validateToken({}, () => {
        return next();
    });
}
