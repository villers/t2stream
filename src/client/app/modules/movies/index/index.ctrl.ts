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
        title: string;
        figure: FigureFoundation;
        description: FilmDescriptionFoundation;
        rating: number;
        seen: boolean;
    }

    export class IndexController {
        public films: Array<FilmFoundation> = [];

        /** @ngInject */
        constructor() {
            var tpl = {
                title: 'Exemple de film #',
                figure: {
                    img: '../assets/images/films/film.jpg'
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
                f.rating = this.randomNote(0, 5);
                f.seen = this.randomNote(0, 1);
                this.films.push(f);
            }
        }

        randomNote(min: number = 0, max: number = 5) {
            var r = Math.round(Math.round(Math.random() * 10 / 2) + Math.round(Math.random() * 10 / .25) * .75);
            return r > max || r < min ? this.randomNote(min, max) : r;
        }

        repeatInt(u): Array<number> {
            var arr = [];
            for (var i = 0; i < u; i++) {
                arr.push(i);
            }
            return arr;
        }
    }
}
