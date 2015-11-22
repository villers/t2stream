/// <reference path="./client.d.ts" />

module t2stream {
    'use strict';

    export class Translate {
        /** @ngInject */
        constructor(
            $translateProvider: angular.translate.ITranslateProvider,
            $translatePartialLoaderProvider: angular.translate.ITranslatePartialLoaderService,
            config: IConfig
        ) {
            $translateProvider.storageKey('locale');

            $translateProvider
            // configuration de la structure d'un dossier d'une traduction
                .useLoader('$translatePartialLoader', {
                    urlTemplate: '{part}/il8n/{lang}.json'
                })

                // mise en cache des fichiers de lang
                .useLoaderCache(true)

                // les traductions sont échappées pour des raisons de sécurité
                .useSanitizeValueStrategy('sanitize')

                // défini les langues gérées
                .registerAvailableLanguageKeys(Translate.getLanguagesKeys(config.languagues), {
                    'en-*': 'en',
                    'fr-*': 'fr',
                    '*': 'en'
                })

                // détermine la langue séléctionnée par rapport aux langues du navigateur
                .determinePreferredLanguage()

                // sauvegarde la langue séléctionnée dans le localStorage
                .useLocalStorage();

            // ajoute un dossier de traduction à charger
            $translatePartialLoaderProvider.addPart('app');
        }

        static getLanguagesKeys(languagues) {
            var languageKeys = [];
            for (var lang = languagues.length - 1; lang >= 0; lang--) {
                languageKeys.push(languagues[lang].key);
            }
            return languageKeys;
        }
    }

    angular
        .module('t2stream')
        .config(Translate);
}
