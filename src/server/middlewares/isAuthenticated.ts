'use strict';

import {Request, Response} from 'express';
import {codes, createError} from '../helpers/error';
import {getTokenFromRequest, validateToken} from '../helpers/token';

export function isAuthenticated(req: Request, res: Response, next: Function) {
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
