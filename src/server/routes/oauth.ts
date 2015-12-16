'use strict';

import {Router, Request, Response} from 'express';
import {codes, GenericsErrorCode, createError} from '../helpers/error';
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

    private UserIsInDatabase(): Promise<{}> {
        return getUser(this.getUsername(), this.getPassword(), this.getUserModel());
    }

    public getUsername(): string {
        return this.Request.body.username;
    }

    public getPassword(): string {
        return this.Request.body.password;
    }

    public CheckUsernameAndPasswordIfExists(): boolean {
        if (this.getUsername() === undefined || this.getPassword() === undefined) {
            return false;
        }
        return true;
    }

    public GetTokenForUser(): Promise<{}> {
        return this.UserIsInDatabase().then((value) : Promise<{}> => {
            return generateToken('accessToken', value);
        },
        () => {
            return this.Next(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.INVALID_USER));
        });
    }
}

export function OAuthRoutes() {
    var router = Router();

    router.post('/token', (req: Request, res: Response, next: Function) => {
            if (!req.is('application/x-www-form-urlencoded')) {
                return next(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.BAD_CONTENT_TYPE));
            }
            let grantType = req.body.grant_type;
            switch (grantType) {
                case 'password':
                    let auth: Authentication = new Authentication(req, res, next);
                    if (!auth.CheckUsernameAndPasswordIfExists()) {
                        return next(createError(codes.badRequest, 'invalid_grant', GenericsErrorCode.MISSING_BODY_ARGUMENT));
                    } else {
                        auth.GetTokenForUser().then((value) => {
                           res.send({
                              access_token: value
                           });
                        });
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