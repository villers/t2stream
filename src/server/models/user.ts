'use strict';

let Waterline = require('waterline');

export const User = Waterline.Collection.extend({
    identity: 'user',
    connection: 'disk',
    tableName: 'users',
    migrate: 'safe',

    attributes: {
        username: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
        isAdmin: {
            type: 'boolean',
            defaultsTo: false
        },
        toJSON() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    }
});