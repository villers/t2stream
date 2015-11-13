/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    angular.module('templates', []);
    angular.module('t2stream', ['angular-loading-bar', 'ui.router', 'templates', 'ngMessages', 'ngMaterial', 't2stream.components', 't2stream.modules']);
}