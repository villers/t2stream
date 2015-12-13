'use strict';

import {Request, Response} from 'express';
import {codes, createError} from '../helpers/error';

export function unauthorized(err, req: Request, res: Response, next: Function) {
    if (err.status !== codes.unauthorized) {
        return next(err);
    }

    res.status(codes.unauthorized).send({
        success: false,
        message: err.message || 'Unauthorized.',
        error: err
    });
}

export function forbidden(err, req: Request, res: Response, next: Function) {
    if (err.status !== codes.forbidden) {
        return next(err);
    }

    res.status(codes.forbidden).send({
        success: false,
        message: err.message || 'Forbidden.',
        error: err
    });
}

export function badRequest(err, req: Request, res: Response, next: Function) {
    if (err.status !== codes.badRequest) {
        return next(err);
    }

    res.status(codes.badRequest).send({
        success: false,
        message: err.message || 'Bad Request',
        error: err
    });
}

export function genericError(err, req: Request, res: Response, next: Function) {
    res.status(codes.genericError).send({
        success: false,
        message: err.message || 'Internal server error.',
        error: err
    });
}

export function pageNotFound(req: Request, res: Response, next: Function) {
    res.status(codes.pageNotFound).send({
        success: false,
        message: 'Page not found.'
    });
}