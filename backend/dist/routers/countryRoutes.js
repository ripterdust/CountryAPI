"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countryRouter = void 0;
var express_1 = require("express");
var countryControllers_1 = require("../controllers/countryControllers");
exports.countryRouter = express_1.Router();
exports.countryRouter
    // Get
    .get('/', countryControllers_1.mainPage)
    .get('/name/:name?', countryControllers_1.getCountryByName);
