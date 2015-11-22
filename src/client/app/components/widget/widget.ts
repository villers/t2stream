/// <reference path="../../../client.d.ts" />

module t2stream.components.widget {

    // Usage:
    //
    // ```html
    // <widget title="'Nice Title'" subtitle="'Subtitle'" avatar="http://myavatar.jpg" loading="true"
    // title-position="top|bottom|left|right" content-padding overlay-title>content here</widget>
    // ```

    interface IScopeInterface extends angular.IScope {
        vm: any;
    }

    export class Widget {
        static resolve(): angular.IDirective {
            return {
                restrict: 'E',
                templateUrl: 'app/components/widget/widget.html',
                transclude: true,
                replace: true,
                scope: {
                    title: '@',
                    subtitle: '@',
                    avatar: '@',
                    loading: '='
                },
                bindToController: true,
                controller: () => {
                    var vm: any = this;
                    vm.loading = false;
                },
                controllerAs: 'vm',
                link: ($scope: IScopeInterface, $element: angular.IRootElementService, attrs: angular.IAttributes) => {

                    console.log(attrs);

                    // set the value of the widget layout attribute
                    $scope.vm.widgetLayout = attrs['titlePosition'] === 'left' || attrs['titlePosition'] === 'right' ? 'row' : 'column';

                    // set the layout attribute for the widget content
                    $scope.vm.contentLayout = angular.isUndefined(attrs['contentLayout']) ? 'column' : attrs['contentLayout'];

                    // set if the layout-padding attribute will be added
                    $scope.vm.contentPadding = angular.isDefined(attrs['contentPadding']);

                    // set the content align
                    $scope.vm.contentLayoutAlign = angular.isUndefined(attrs['contentLayoutAlign']) ? '' : attrs['contentLayoutAlign'];

                    // set the order of the title and content based on title position
                    $scope.vm.titleOrder = attrs['titlePosition'] === 'right' || attrs['titlePosition'] === 'bottom' ? 2 : 1;
                    $scope.vm.contentOrder = attrs['titlePosition'] === 'right' || attrs['titlePosition'] === 'bottom' ? 1 : 2;

                    // set if we overlay the title on top of the widget content
                    $scope.vm.overlayTitle = angular.isUndefined(attrs['overlayTitle']) ? undefined : true;

                    if (angular.isDefined(attrs['class'])) {
                        $element.addClass(attrs['class']);
                    }

                    if (angular.isDefined(attrs['backgroundImage'])) {
                        $element.css('background-image', 'url(' + attrs['backgroundImage'] + ')');
                    }

                    // remove title attribute to stop popup on hover
                    $element.attr('title', '');
                }
            };
        }
    }

    angular
        .module('t2stream.components.widget')
        .directive('widget', Widget.resolve);
}