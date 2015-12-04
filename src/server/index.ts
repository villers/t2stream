/// <reference path="./TypeFramework.d.ts" />

import { Application } from './Application';
var app : Application = new Application(__dirname);

import { User } from './Models/User';

app.configure(() => {
	app.config.addJson('config/app.json');
	app.addDeclaration('Models.d.ts');
	app.addModel(User);
});

app.start();