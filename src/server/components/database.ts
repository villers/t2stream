/// <reference path="../server.d.ts" />
import path = require('path');

interface SequelizeDefiner extends Sequelize.Sequelize {
	defineFromFolder(path: string) : SequelizeDefiner;
}

interface SequelizeStaticDefiner extends Sequelize.SequelizeStatic {
	new ( database : string, username : string, password : string, options? : Sequelize.Options ) : SequelizeDefiner;
	new ( database : string, username : string, options? : Sequelize.Options ) : SequelizeDefiner;
	new ( uri : string, options? : Sequelize.Options ) : SequelizeDefiner;
}

exports = module.exports = (sequelize: any, sequelizeDefiner: any, settings: Settings.Settings) : SequelizeDefiner => {
	var env : string = settings.get('env');
	var configDB: any = settings.get('DB')[env];
	var sequelizeStatic : SequelizeStaticDefiner = sequelizeDefiner(sequelize);
	var DBInstance : SequelizeDefiner = new sequelizeStatic(configDB.database, configDB.username, configDB.password, configDB);
	DBInstance.defineFromFolder(path.join(__dirname, '..', 'models'));
	return DBInstance;
};

exports['@singleton'] = true;
exports['@require'] = ['sequelize', 'sequelize-definer', 'settings'];