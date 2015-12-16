'use strict';

import {Router, IRouter, Request, Response} from 'express';
import {codes, GenericsErrorCode, createError} from '../helpers/error';
import {ICustomError} from '../typings/error';
import * as Promise from 'bluebird';
import {getUser, generateToken} from '../helpers/authentication';

class Authentication {
    Request: Request;
    Response: Response;
    Next: Function;

    constructor(request: Request, response: Response, next: Function) {
        this.Request = request;
        this.Response = response;
        this.Next = next;
    }

    private getUserModel(): any {
        let app: any = this.Request.app;
        return app.models.user;
    }

    private UserIsInDatabase(): Promise<any> {
        return getUser(this.getUsername(), this.getPassword(), this.getUserModel());
    }

    public getUsername(): string {
        return this.Request.body.username;
    }

    public getPassword(): string {
        return this.Request.body.password;
    }

    public CheckUsernameAndPasswordIfExists(): boolean {
        return !(this.getUsername() === undefined || this.getPassword() === undefined);

    }

    public GetTokenForUser(): Promise<any> {
        return this.UserIsInDatabase().then(
            (value): Promise<any> => Promise.resolve(generateToken('accessToken', value)),
            (): Promise<any> => Promise.reject(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.INVALID_USER))
        );
    }
}

export function OAuthRoutes(): IRouter<any> {
    var router: IRouter<any> = Router();

    router.post('/token', (req: Request, res: Response, next: Function) => {
        if (!req.is('application/x-www-form-urlencoded')) {
            return next(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.BAD_CONTENT_TYPE));
        }

        switch (req.body.grant_type) {
            case 'password':
                let auth: Authentication = new Authentication(req, res, next);
                if (!auth.CheckUsernameAndPasswordIfExists()) {
                    return next(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.MISSING_BODY_ARGUMENT));
                } else {
                    return auth.GetTokenForUser().then(
                        (value: string) => res.send({ access_token: value }),
                        (error: ICustomError) => next(error)
                    );
                }
                break;
            case 'refreshtoken':
                return next(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.NOT_IMPL));
            default:
                return next(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.INVALID_GRANT_TYPE));
        }
    });

    return router;
}
