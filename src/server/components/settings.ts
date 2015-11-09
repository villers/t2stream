/// <reference path="../server.d.ts" />

import fs = require('fs');

var CONF_DATABASE = 'config/database.json';

exports = module.exports = function () {
	var settings : Settings = new Settings();
	settings.set('env', process.env.NODE_ENV || 'development');
	settings.readConfigFile('DB', CONF_DATABASE);
	return settings;
};

class Settings {
	_hash : {};

	constructor() {
		this._hash = {};
	}

	set(key : string, value : any) : void {
		this._hash[key] = value;
	}

	get(key: string): any {
		return this._hash[key];
	}

	readConfigFile(key: string, pathFile: string) : void {
		if (fs.existsSync(pathFile)) {
		    var data = fs.readFileSync(pathFile, 'utf8');
    		var json = JSON.parse(data);
			this.set(key, json);
		} else {
			console.log('File does not exists : ' + pathFile);
		}
	}
}

exports['@singleton'] = true;