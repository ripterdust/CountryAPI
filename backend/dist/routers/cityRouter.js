"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var cityController_1 = require("../controllers/cityController");
// Inicializating router
exports.router = express_1.Router();
// Routes
exports.router
    // Get
    .get('/', cityController_1.mainPage)
    .get('/city/', function (req, res) {
    res.send('city');
})
    .get('/page/:number?', cityController_1.pagination)
    .get('/city/:id', cityController_1.getCity)
    .get('/cities/:code', cityController_1.getCitiesByCountryCode);
