"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.error = void 0;
var error = function (res, error) {
    if (error === void 0) { error = 'Internal server error'; }
    res.send({ error: error }).status(500);
};
exports.error = error;
