/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    import MenuController = t2stream.components.menu.MenuController;
    import DefaultToolbarController = t2stream.components.toolbars.DefaultToolbarController;


    export class RouterConfig {
        /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            $stateProvider
                .state('layout', {
                    abstract: true,
                    templateUrl: 'app/components/layout/layout.html'
                })
                .state('layout.default', {
                    abstract: true,
                    views: {
                        sidebarLeft: {
                            templateUrl: 'app/components/menu/menu.html',
                            controller: MenuController,
                            controllerAs: 'vm'
                        },
                        toolbar: {
                            templateUrl: 'app/components/toolbars/toolbars.html',
                            controller: DefaultToolbarController,
                            controllerAs: 'vm'
                        },
                        content: {
                            template: '<div id="admin-panel-content-view" flex ui-view></div>'
                        },
                        belowContent: {
                            template: '<div ui-view="belowContent"></div>'
                        }
                    }
                });
            $urlRouterProvider.otherwise('/login');
        }
    }

    angular
        .module('t2stream')
        .config(RouterConfig);
}
