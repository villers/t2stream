'use strict';

import {Request, Response} from 'express';
import {codes, createError} from '../helpers/error';

export function unauthorized(err, req: Request, res: Response, next: Function) {
    if (err.status !== codes.unauthorized) {
        return next(err);
    }

    res.status(codes.unauthorized).send({
        error: err.message || 'Unauthorized.',
        error_description: err.error_description || err.message || 'Unauthorized.'
    });
}

export function forbidden(err, req: Request, res: Response, next: Function) {
    if (err.status !== codes.forbidden) {
        return next(err);
    }

    res.status(codes.forbidden).send({
        error: err.message || 'Forbidden.',
        error_description: err.error_description || err.message || 'Forbidden.'
    });
}

export function badRequest(err, req: Request, res: Response, next: Function) {
    if (err.status !== codes.badRequest) {
        return next(err);
    }

    res.status(codes.badRequest).send({
        error: err.message || 'Bad Request',
        error_description: err.error_description || err.message || 'Bad Request'
    });
}

export function genericError(err, req: Request, res: Response, next: Function) {
    res.status(codes.genericError).send({
        error: err.message || 'Internal server error.',
        error_description: err.error_description || err.message || 'Internal server error.'
    });
}

export function pageNotFound(req: Request, res: Response, next: Function) {
    res.status(codes.pageNotFound).send({
        error: 'Page not found.'
    });
}