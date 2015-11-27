/// <reference path="./TypeFramework.d.ts" />

import { Application } from './Application';
import { Response } from './Response';
import { Request as EXRequest } from 'express';
import * as path from 'path';

export interface IActionResult {
    execute(Application, Response): void;
}

export class RedirectResult implements IActionResult {
    constructor(public url: string, public status: number = 302) { }
    execute(app: Application, response: Response) {
        response.express.redirect(this.status, this.url);
    }
}

export class ContentResult implements IActionResult {
    constructor(public content: string, public contentType?: string) { }
    execute(app: Application, response: Response) {
        if (!!this.contentType) {
            response.setContentType(this.contentType);
        }
        response.express.send(this.content);
    }
}

export class JsonResult implements IActionResult {
    constructor(public data: {}) { }
    execute(app: Application, response: Response) {
        response.express.json(this.data);
    }
}

export class FileResult implements IActionResult {
    constructor(public path: string) { }
    execute(app: Application, response: Response) {
        var file = path.join(app.root, this.path);
        response.express.sendfile(file);
    }
}

export class DownloadResult implements IActionResult {
    constructor(public path: string, public filename?: string) { }
    execute(app: Application, response: Response) {
        var file = path.join(app.root, this.path);
        response.express.attachment(file);
        response.express.sendfile(file, this.filename);
    }
}

export class ViewResult implements IActionResult {
    constructor(public template: string, public options?: {}) { }
    execute(app: Application, response: Response) {
        response.express.render(this.template, this.options);
    }
}