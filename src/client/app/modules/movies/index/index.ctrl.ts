/// <reference path="../../../../client.d.ts" />

module t2stream.modules.movies {
    'use strict';

    interface FilmDescriptionFoundation {
        snippet: string;
        full: string;
    }


    interface FigureFoundation {
        img: string;
    }

    interface FilmFoundation {
        title: string;
        figure: FigureFoundation;
        description: FilmDescriptionFoundation;
    }

    class Film {
        public title: string;
        public figure: FigureFoundation;
        public description: FilmDescriptionFoundation;
    }

    export class IndexController {

        public films: Array<FilmFoundation> = [];
        /** @ngInject */
        constructor() {
            var tpl = {
                title: 'Film #',
                figure: {
                    img: 'http://www.avoir-alire.com/IMG/arton28831.jpg?1416860220'
                },
                description: {
                    snippet: 'Lorem du Film #',
                    full: 'Lorem ipsum dolor si a met siciicic'
                }
            };
            for (var i = 0; i < 60; i++) {
                var f = new Film();
                f.title = tpl.title + i;
                f.figure = {img: tpl.figure.img};
                f.description = {snippet: tpl.description.snippet + i, full:  '#' + i + tpl.description.full};
                this.films.push(f);
            }
        }

        doClick() {
            alert('You are crazy!!!');
        }
    }
}
