/// <reference path="../server.d.ts" />
import sequelize = require('sequelize');

module.exports = {
    fields: {
        username: sequelize.STRING,
        password: sequelize.STRING,
        createdAt: {
            type: sequelize.DATE,
            defaultValue: sequelize.NOW,
            allowNull: false
        },
        updatedAt: {
            type: sequelize.DATE
        }
    }
};