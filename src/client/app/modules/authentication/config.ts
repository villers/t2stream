/// <reference path="../../../client.d.ts" />

module t2stream.modules.authentication {
    'use strict';

    export class ModuleConfig {
        /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider) {
            $stateProvider
                .state('modules.authentication', {
                    url: '/login',
                    views: {
                        'viewA': {
                            templateUrl: 'app/modules/authentication/index/index.html',
                            controller: IndexCtrl,
                            controllerAs: 'vm'
                        }
                    }
                });
        }
    }

    angular
        .module('t2stream.modules.authentication')
        .config(ModuleConfig);
}
