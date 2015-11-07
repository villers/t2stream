/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    export class RunBlock {
        /** @ngInject */
        constructor() {
            console.log('Application starred');
        }
    }

    angular
        .module('t2stream')
        .config(RunBlock);
}
