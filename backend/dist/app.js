"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var cityRouter_1 = require("./routers/cityRouter");
var countryRoutes_1 = require("./routers/countryRoutes");
var cors = require('cors');
// Initializatin express
exports.app = express_1.default();
// Settings
exports.app.set('port', process.env.PORT || 8080);
// Middlewares
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(cors());
// Routes
// City routes
exports.app.use('/', cityRouter_1.router);
// Coutnry routes
exports.app.use('/country', countryRoutes_1.countryRouter);
// Languages routes
exports.app.use('*', function (req, res) {
    res.send({ error: 'Page not found' }).status(200);
});
