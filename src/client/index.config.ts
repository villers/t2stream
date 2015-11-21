/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    export class Config {
        /** @ngInject */
        constructor($logProvider: ng.ILogProvider, cfpLoadingBarProvider: any) {
            // enable log
            $logProvider.debugEnabled(true);

            // disable spinner
            cfpLoadingBarProvider.includeSpinner = false;
        }
    }

    angular
        .module('t2stream')
        .config(Config);
}
