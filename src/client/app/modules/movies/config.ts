/// <reference path="../../../client.d.ts" />

module t2stream.modules.movies {
    'use strict';

    export class ModuleConfig {
        /** @ngInject */
        constructor($stateProvider: ng.ui.IStateProvider, $translatePartialLoaderProvider: angular.translate.ITranslatePartialLoaderService) {
            $translatePartialLoaderProvider.addPart('app/modules/movies');
            $stateProvider
                .state('movies', {
                    abstract: true,
                    templateUrl: 'app/modules/movies/layouts/layout.html'
                })
                .state('movies.index', {
                    url: '/movies',
                    templateUrl: 'app/modules/movies/index/index.html',
                    controller: IndexController,
                    controllerAs: 'vm'
                });
        }
    }

    angular
        .module('t2stream.modules.movies')
        .config(ModuleConfig);
}
