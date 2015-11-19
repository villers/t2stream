/**
 * Created by Thomas on 19/11/15.
 */

module t2stream.components.validation {

    interface IScopeInterface extends angular.IScope {
        match: angular.INgModelController;
    }

    export class PasswordMatch {

        static resolve(): angular.IDirective {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: (scope: IScopeInterface, element: angular.IRootElementService, attrs: angular.IAttributes, ngModel: angular.INgModelController) => {
                    ngModel.$viewChangeListeners.push(function() {
                        ngModel.$setValidity('samePassword', scope.match.$modelValue === ngModel.$modelValue);
                        scope.match.$setValidity('samePassword', scope.match.$modelValue === ngModel.$modelValue);
                    });
                },
                scope: {
                    'match': '='
                }
            };
        }

    }

    angular.module('t2stream.components.validation').directive('match', PasswordMatch.resolve);
}