/// <reference path="../../../../client.d.ts" />

module t2stream.modules.authentication {
    'use strict';

    class User {
        constructor(public name: string, public email: string, public password: string, public confirm: string) {

        }
    }

    export class RegisterController {
        public user: User;

        /** @ngInject */
        constructor(
            private $http: angular.IHttpService,
            private $state: angular.ui.IStateService,
            private $mdToast: angular.material.IToastService,
            private $translate: angular.translate.ITranslateService
        ) {
            this.user = new User('', '', '', '');
        }

        signupClick() {
            this.$http({
                method: 'POST',
                url: 'http://localhost:7000',
                data: this.user
            }).
            success((data: any) => {
                this.$mdToast.show(
                    this.$mdToast.simple()
                        .content(this.$translate.instant('SIGNUP.MESSAGES.CONFIRM_SENT') + ' ' + data.email)
                        .position('bottom right')
                        .action(this.$translate.instant('SIGNUP.MESSAGES.LOGIN_NOW'))
                        .highlightAction(true)
                        .hideDelay(0)
                ).then(() => {
                    this.$state.go('modules.dashboard');
                });
            }).
            error(() => {
                this.$mdToast.show(
                    this.$mdToast.simple()
                        .content(this.$translate.instant('SIGNUP.MESSAGES.NO_SIGNUP'))
                        .position('bottom right')
                        .hideDelay(5000)
                );
            });
        }
    }
}
