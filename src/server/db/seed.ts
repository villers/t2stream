/// <reference path="../index.d.ts" />

import {hash} from 'bcrypt';

export function Seed(Model: any) {
    hash('BLAHBLAHCAR', 10, (err: Error, res: string) => {
        Model.user.create({username: 'Administrator', password: res, isAdmin: true}).exec((err) => {
            console.log('create User');
        });
    });
}
