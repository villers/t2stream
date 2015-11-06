/// <reference path="./server.d.ts" />

import fs = require('fs');
import path = require('path');
import SequelizeImport = require('sequelize');

var basename : string = path.basename(module.filename);
var env : string = process.env.NODE_ENV || 'development';

var configFile : any = require(__dirname + '\config\database.json')[env];

var db : any = {};

if (configFile.use_env_variable) {
	var sequelize : SequelizeImport.Sequelize = new SequelizeImport(process.env[configFile.use_env_variable]);
} else {
  	var sequelize : SequelizeImport.Sequelize = new SequelizeImport(configFile.database, configFile.username, configFile.password, configFile);
}

fs.readdirSync(__dirname + 'models').filter((file) => {
	return (file.indexOf('.') !== 0) && (file !== basename);
})
.forEach((file) => {
	if (file.slice(-3) !== '.js') {
		return;
	}
	var model : any = sequelize['import'](path.join(__dirname, 'models', file));
    db[model.name] = model;
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = SequelizeImport;

module.exports = db;