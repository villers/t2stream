/// <reference path="../index.d.ts" />

export function Seed(Model: any) {
	Model.user.create({username: 'Administrator', password: 'BLAHBLAHCAR', isAdmin: true}).exec((err) => {
		console.log('create User');
	});
}