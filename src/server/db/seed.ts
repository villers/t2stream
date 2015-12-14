/// <reference path="../index.d.ts" />

import * as bcrypt from 'bcrypt';

export function Seed(Model: any) {
	bcrypt.hash('BLAHBLAHCAR', 10, (err: Error, res: string) => {
			Model.user.create({username: 'Administrator', password: res, isAdmin: true}).exec((err) => {
		console.log('create User');
	});
	});

}