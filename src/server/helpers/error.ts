'use strict';

import {ICustomError} from '../typings/error';

export const codes = {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    pageNotFound: 404,
    genericError: 500
};

export function createError(status: number = codes.genericError, message: string = 'Something went wrong.'): ICustomError {
    let customError: ICustomError = new Error(message);
    customError.status = status;

    return customError;
}