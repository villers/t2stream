/// <reference path="../index.d.ts" />

import {Request} from 'express';
import {compare} from 'bcrypt';
import {verify, sign} from 'jsonwebtoken';
import {config} from '../config/config';
import {User} from '../models/user';
import * as Promise from 'bluebird';
import {GetApplication} from '../index';

export function getToken(bearerToken: string, Type: string): Promise<any> {
    return new Promise(function(resolve: Function, reject: Function) {
        verify(bearerToken, config.token.secret, { issuer: config.token.issuer }, (err: Error, decoded: any) => {
            if (err) {
                return reject(err);
            }
            if (decoded.Type !== Type) {
                return reject({ Message: 'bad grant_type' });
            }
            resolve(decoded);
        });
    });
}

export function getUser(username: string, password: string, ModelUsers: any): Promise<any> {
    return new Promise(function(resolve: Function, reject: Function) {
        ModelUsers.findOne({ username: username }).exec((err, model) => {
            if (err || model === undefined) {
                return reject(err);
            }
            compare(password, model.password, (err: Error, same: boolean) => {
                if (same) {
                    resolve(model.toJSON());
                } else {
                    reject(err);
                }
            });
        });
    });
}

export function generateToken(type: string, User: any): Promise<any> {
    return new Promise(function(resolve: Function, reject: Function) {
        User.Type = type;
        let Token = sign(User, config.token.secret, { expiresIn: config.token.expiresInSeconds, issuer: config.token.issuer });
        resolve(Token);
    });
}
