/// <reference path="../server.d.ts" />

import ioc = require('electrolyte');

module.exports = function() {
	/// Init file for IOC only ioc.loader is needed here
	ioc.use(ioc.node_modules());
	ioc.use(ioc.node('components/'));
	//ioc.loader('handlers', ioc.node('handlers/'));
};