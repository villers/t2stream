/// <reference path="../../../client.d.ts" />

module t2stream.modules.authentication {
    'use strict';

    export class ModuleConfig {
        /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $translatePartialLoaderProvider: angular.translate.ITranslatePartialLoaderService) {

            $translatePartialLoaderProvider.addPart('app/modules/authentication');

            $stateProvider
                .state('authentication', {
                    abstract: true,
                    templateUrl: 'app/modules/authentication/layouts/authentication.html'
                })
                .state('authentication.login', {
                    url: '/login',
                    templateUrl: 'app/modules/authentication/login/login.html',
                    controller: LoginController,
                    controllerAs: 'vm'
                });
        }
    }

    angular
        .module('t2stream.modules.authentication')
        .config(ModuleConfig);
}
