"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
// Server listening
app_1.app.listen(app_1.app.get('port'), function () {
    console.log("Server running on port " + app_1.app.get('port'));
});
