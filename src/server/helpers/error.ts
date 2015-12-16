'use strict';

import {ICustomError} from '../typings/error';

export const codes = {
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    pageNotFound: 404,
    genericError: 500
};

export const GenericsErrorCode = {
    GENERICS_ERROR: '-1',
    BAD_CONTENT_TYPE: '0',
    INVALID_PARAMETER_BODY: '1',
    INVALID_GRANT_TYPE: '2',
    MISSING_BODY_ARGUMENT: '3',
    INVALID_USER: '4',
    NOT_IMPL: '99'
};

export function createError(status: number = codes.genericError, msg: string = 'Error',
    error_description: string = GenericsErrorCode.GENERICS_ERROR): ICustomError {
    let customError: ICustomError = new Error(msg);
    customError.status = status;
    customError.error_description = error_description;

    return customError;
}

