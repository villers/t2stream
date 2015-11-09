/// <reference path="../server.d.ts" />
import Sequelize = require('sequelize');

exports = module.exports = (sequelize: Sequelize.SequelizeStatic, settings: Settings.Settings) : void => {
	var env : string = settings.get('env');
	var configDB = settings.get('DB')[env];
	var DBInstance = new sequelize(configDB.database, configDB.username, configDB.password, configDB);
};

exports['@singleton'] = true;
exports['@require'] = [ 'sequelize', 'settings'];