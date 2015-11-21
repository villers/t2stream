/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    angular.module('templates', []);
    angular.module('t2stream', [
        'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngMaterial',
        'ui.router', 'angular-loading-bar', 'pascalprecht.translate', 'LocalStorageModule', 'angularMoment',
        'templates', 't2stream.components', 't2stream.modules',
    ]);
}
