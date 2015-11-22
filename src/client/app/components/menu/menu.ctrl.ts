/// <reference path="../../../client.d.ts" />

module t2stream.components.menu {
    'use strict';

    export class MenuController {
        routeName: string;

        /** @ngInject */
        constructor($state: angular.ui.IStateService) {
            this.routeName = $state.current.name;
        }
    }
}
