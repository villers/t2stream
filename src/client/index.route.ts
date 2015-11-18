/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    export class RouterConfig {
        /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            $stateProvider
                .state('modules', {
                    abstract: true,
                    templateUrl: 'app/modules/layout.html',
                    data: {
                        proxy: 'modules.dashboard'
                    }
                });
            $urlRouterProvider.otherwise('/login');
        }
    }

    angular
        .module('t2stream')
        .config(RouterConfig);
}
