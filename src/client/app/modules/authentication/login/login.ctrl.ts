/// <reference path="../../../../client.d.ts" />

module t2stream.modules.authentication {
    'use strict';

    class User {
        constructor(public email: string, public password: string) {

        }
    }

    export class LoginController {
        public user: User;

        /** @ngInject */
        constructor(private $state: angular.ui.IStateService) {
            this.user = new User('', '');
        }

        loginClick() {
            this.$state.go('layout.default.dashboard');
        }
    }
}
