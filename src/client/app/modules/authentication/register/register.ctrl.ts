/// <reference path="../../../../client.d.ts" />

module t2stream.modules.authentication {
    'use strict';

    export class RegisterController {

        public email: string = null;
        public password: string = null;
        public confirm: string = null;

        /** @ngInject */
        constructor(private $state: angular.ui.IStateService) {

        }

       submit() {
           console.log(this );
           //this.$state.go('modules.');
       }
    }
}
