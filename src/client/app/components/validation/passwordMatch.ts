/// <reference path="../../../client.d.ts" />

module t2stream.components.validation {

    interface IScopeInterface extends angular.IScope {
        same: angular.INgModelController;
    }

    export class SameInput {
        static resolve(): angular.IDirective {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: (scope: IScopeInterface, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) => {
                    ngModel.$viewChangeListeners.push(() => {
                        ngModel.$setValidity('same', scope.same.$modelValue === ngModel.$modelValue);
                        scope.same.$setValidity('same', scope.same.$modelValue === ngModel.$modelValue);
                    });
                },
                scope: {
                    'same': '='
                }
            };
        }
    }

    angular
        .module('t2stream.components.validation')
        .directive('same', SameInput.resolve);
}