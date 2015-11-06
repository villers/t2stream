/// <reference path="./server.d.ts" />
import express = require('express');

module.exports = function() {
	var expressInstance : express.Express = this;
	expressInstance.use(express.static(process.cwd() + '/public/'));
};