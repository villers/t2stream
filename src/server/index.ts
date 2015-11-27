/// <reference path="./TypeFramework.d.ts" />

import { Application } from './Application';
var app : Application = new Application(__dirname);

app.configure(() => {
});

app.start();