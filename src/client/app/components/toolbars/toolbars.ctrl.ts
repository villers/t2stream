/// <reference path="../../../client.d.ts" />

module t2stream.components.toolbars {
    'use strict';

    export class DefaultToolbarController {
        languages: Array<any>;

        /** @ngInject */
        constructor(
            private $translate: angular.translate.ITranslateService,
            private $mdToast: any,
            private config: IConfig
        ) {
            this.languages = config.languagues;
        }

        switchLanguage(languageCode) {
            this.$translate.use(languageCode)
                .then(() => {
                    this.$mdToast.show(
                        this.$mdToast.simple()
                            .content(this.$translate.instant('MESSAGES.LANGUAGE_CHANGED'))
                            .position('bottom right')
                            .hideDelay(500)
                    );
                });
        }
    }
}
