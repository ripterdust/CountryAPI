"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCitiesByCountryCode = exports.getCity = exports.pagination = exports.mainPage = void 0;
var city_1 = require("../models/city");
var sequelize_1 = require("sequelize");
var responses_1 = require("../responses/responses");
var queryAtrributes = ['ID', 'Name', 'CountryCode', 'District', 'Population'];
// Main page 
var mainPage = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var cities;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, city_1.City.findAll({
                    attributes: queryAtrributes,
                    limit: 10,
                    where: {
                        CountryCode: (_a = {},
                            _a[sequelize_1.Op.eq] = 'GTM',
                            _a)
                    }
                })
                // Sending data
            ];
            case 1:
                cities = _b.sent();
                // Sending data
                res.send([cities]).status(200);
                return [2 /*return*/];
        }
    });
}); };
exports.mainPage = mainPage;
// Obtaining city with optional limit
var pagination = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var number, limit, page, cities, err_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                number = req.params.number;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                limit = 10;
                page = number ? parseInt(number) : 1;
                if (page <= 0 || page.typeOf != Number) {
                    page = 1;
                }
                return [4 /*yield*/, city_1.City.findAll({
                        attributes: queryAtrributes,
                        limit: limit,
                        where: {
                            ID: (_a = {},
                                _a[sequelize_1.Op.gte] = page == 1 ? 1 : (page - 1 <= 0 ? 1 : (page - 1)) * 10,
                                _a[sequelize_1.Op.lt] = page * 10,
                                _a)
                        }
                    })];
            case 2:
                cities = _b.sent();
                res.send(cities).status(200);
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                responses_1.error(res, 'Invalid page number');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.pagination = pagination;
// Obtaining city
var getCity = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var param, id, city, err_2;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                param = req.params.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                id = param ? parseInt(param) : 1;
                return [4 /*yield*/, city_1.City.findAll({
                        attributes: queryAtrributes,
                        where: {
                            ID: (_a = {},
                                _a[sequelize_1.Op.eq] = id,
                                _a)
                        }
                    })];
            case 2:
                city = _b.sent();
                res.send(city).status(200);
                return [3 /*break*/, 4];
            case 3:
                err_2 = _b.sent();
                responses_1.error(res);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getCity = getCity;
// Getting cities by country code
var getCitiesByCountryCode = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var code, cities, err_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                code = req.params.code;
                return [4 /*yield*/, city_1.City.findAll({
                        attributes: queryAtrributes,
                        where: {
                            CountryCode: (_a = {},
                                _a[sequelize_1.Op.eq] = code,
                                _a)
                        }
                    })];
            case 1:
                cities = _b.sent();
                if (cities.length <= 0) {
                    responses_1.error(res, 'No cities found');
                }
                else {
                    res.send(cities);
                }
                return [3 /*break*/, 3];
            case 2:
                err_3 = _b.sent();
                responses_1.error(res);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getCitiesByCountryCode = getCitiesByCountryCode;
