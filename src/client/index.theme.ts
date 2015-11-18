/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    export class Theme {
        /** @ngInject */
        constructor($mdThemingProvider: angular.material.IThemingProvider) {
            $mdThemingProvider
                .theme('default')
                .primaryPalette('deep-purple')
                .accentPalette('deep-orange');
        }
    }

    angular
        .module('t2stream')
        .config(Theme);
}
