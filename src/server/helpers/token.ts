'use strict';

export function getTokenFromRequest(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else {
        return req.headers['x-access-token'] || req.body.token || req.query.token;
    }
}

// TODO Need implement
export function validateToken(arg: any, done: () => {}) {
    return done();
}