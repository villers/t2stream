/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    export interface IConfig {
        languagues: Array<any>;
        name: string;
        logo: string;
        version: string;
    }

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
        .config(Config)
        .constant('config', {
            languagues: [
                {
                    name: 'ENGLISH',
                    key: 'en'
                },
                {
                    name: 'FRENCH',
                    key: 'fr'
                }
            ],
            name: 'T2Stream',
            logo: 'assets/images/logo.png',
            version: '&copy;' + new Date().getFullYear() + ' t2stream.com'
        });
}
