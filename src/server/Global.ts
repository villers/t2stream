/// <reference path="./TypeFramework.d.ts" />

export function extend (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) {
            d[p] = b[p];
        }
    }
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};

export interface ICookieOption {
    domain?: string;
    path?: string;
    secure?: boolean;
    httpOnly?: boolean;
    expires?: Date;
    maxAge?: number;
    signed?: boolean;
}