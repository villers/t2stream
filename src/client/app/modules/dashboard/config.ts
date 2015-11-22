/// <reference path="../../../client.d.ts" />

module t2stream.modules.dashboard {
    'use strict';

    export class ModuleConfig {
        /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider) {
            $stateProvider
                .state('layout.default.dashboard', {
                    url: '/dashboard',
                    templateUrl: 'app/modules/dashboard/index/index.html',
                    controller: IndexCtrl,
                    controllerAs: 'vm'
                });
        }
    }

    angular
        .module('t2stream.modules.dashboard')
        .config(ModuleConfig);
}
