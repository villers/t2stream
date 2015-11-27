/// <reference path="TypeFramework.d.ts" />

import { Response } from './Response';
import { Request } from './Request';
import { Reply } from './Reply';
import { IActionResult } from './Result';

import {Request as EXRequest } from 'express';
import * as path from 'path';

export interface IFilterAction {
    (context: IActionFilterContext): void;
}

export interface IActionFilterContext {
    request: Request;
    response: Response;
    reply: Reply;
    next: () => void;
    result?: IActionResult;
}

export interface IActionFilter {
    before?(context: IActionFilterContext): void;
    after?(context: IActionFilterContext): void;
}

export class ActionFilter implements IActionFilter {
    private includeList: string[] = [];
    private excludeList: string[] = [];

    contains(action: string) {
        if (this.includeList.length > 0 && this.excludeList.length > 0) {
            throw new Error('Action filter includes and excludes cannot be both specified!');
        }

        if (this.includeList.length > 0 && !_.contains(this.includeList, action)) {
            return false;
        }
        if (this.excludeList.length > 0 && _.contains(this.excludeList, action)) {
            return false;
        }
        return true;
    }

    only(...includes: string[]): ActionFilter {
        this.includeList.push.apply(this.includeList, includes);
        return this;
    }

    except(...excludes: string[]): ActionFilter {
        this.excludeList.push.apply(this.excludeList, excludes);
        return this;
    }
}