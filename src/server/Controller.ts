/// <reference path="./TypeFramework.d.ts" />

import { Response } from './Response';
import { Request } from './Request';
import { Reply } from './Reply';
import { Model } from './Model';
import { IFilterAction, ActionFilter } from './Filter';
import { IActionResult } from './Result';
import * as path from 'path';

import {Request as EXRequest } from 'express';

export class Controller extends Reply {
    static filters: any[];
    static model: any = null;

    constructor(public request: Request, public response: Response, send: (IActionResult) => void) {
        super(send);
    }

    static addBeforeFilter(action: IFilterAction): ActionFilter {
        var filter = new ActionFilter();
        filter['before'] = action;
        this.filters = this.filters || [];
        this.filters.push(filter);
        return filter;
    }

    static addAfterFilter(action: IFilterAction): ActionFilter {
        var filter = new ActionFilter();
        filter['after'] = action;
        this.filters = this.filters || [];
        this.filters.push(filter);
        return filter;
    }

    static addFilter(filterType: any): ActionFilter {
        var filter = new filterType();
        this.filters = this.filters || [];
        this.filters.push(filter);
        return filter;
    }
}

export class ModelController extends Controller {
    constructor(request: Request, response: Response, send: (IActionResult) => void, public _model: any) {
        super(request, response, send);
    }

    find(id?: string) {
        if (!!id) {
            this._model.first({ id: id }).done((err, model: Model) => {
                if (!model) {
                    this.response.setStatus(404);
                    this.json({ error: 'not found' });
                    return;
                }
                this.json(model);
            });
            return;
        }

        this._model.find().where(this.request.query).done((err, model: Model) => {
            if (!model) {
                this.json([]);
                return;
            }
            this.json(model);
        });
    }

    create() {
        var model = new this._model();
        ModelController.bindModel(model, this.request);

        this._model.save(model, (err) => {
            if (err) {
                this.json(err);
            } else {
                this.json(model);
            }
        });
    }

    update(id: string) {
        this._model.first({ id: id }).done((err, model: Model) => {
            if (!model) {
                this.response.setStatus(404);
                this.json({ error: 'not found' });
                return;
            }
            ModelController.bindModel(model, this.request);
            this._model.save(model, (err) => this.json(model));
        });
    }

    destroy(id: string) {
        this._model.first({ id: id }).done((err, model: Model) => {
            if (!model) {
                this.response.setStatus(404);
                this.json({ error: 'not found' });
                return;
            }
            this._model.destroy(model, (err) => this.json(model));
        });
    }

    private static bindModel(model: any, request: EXRequest) {
        for (var key in request.query) {
            if (request.query.hasOwnProperty(key)) {
                model[key] = request.query[key];
            }
        }

        for (var key in request.body) {
            if (request.body.hasOwnProperty(key)) {
                model[key] = request.body[key];
            }
        }
    }
}