/// <reference path="../server.d.ts" />
import sequelize= require('sequelize');

module.exports = {
    fields: {
        username: sequelize.STRING,
        password: sequelize.STRING
    }
};