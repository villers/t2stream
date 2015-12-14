/// <reference path="../index.d.ts" />

import {Request} from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {config} from '../config/config';
import {User} from '../models/user';

import {GetApplication} from '../index';

export function getAccessToken(bearerToken: string, callback: (error: boolean | any, accessToken: any) => void) {
	jwt.verify(bearerToken, config.token.secret, {issuer: config.token.issuer}, (err: Error, decoded: any) => {
		if (err) {
			callback(false, null);
		}
		if (decoded.Type !== 'accessToken') {
			callback(false, null);
		}
		callback(false, decoded);
	});
};

export function getClient(clientId: string, clientSecret: string, callback: (error: boolean, client: any) => void) {
	callback(false, {clientId : 't2stream'});
};

export function grantTypeAllowed(clientId: string, grantType: string, callback: (error: boolean, allowed: boolean) => void) {
	callback(false, true);
};

export function getUser(username: string, password: string, callback: (error: boolean | any, user: any) => void) {
	let ModelUsers = GetApplication().models.user;
	ModelUsers.findOne({username: username}).exec((err, model) => {
		if (err) {
			callback(false, null);
		}
		bcrypt.compare(password, model.password, (err: Error, same: boolean) => {
			if (same) {
				callback(false, model);
			} else {
				callback(false, null);
			}
		});
	});
};

export function generateToken(type: string, req: Request, callback: (error: boolean, object: any) => void) {
	let User = req.user;
	User.Type = type;
	let Token = jwt.sign(User, config.token.secret, { expiresIn: config.token.expiresInSeconds, issuer: config.token.issuer });
	if (type === 'accessToken') {
		callback(false, { accessToken : Token });
	} else {
		callback(false, { refreshToken  : Token });
	}
};