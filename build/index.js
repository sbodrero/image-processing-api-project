"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var logger_1 = __importDefault(require("./utilities/logger"));
var app = express_1.default();
var port = 3000;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
app.use('/thumbs', express_1.default.static(path_1.default.join(__dirname, 'thumbs')));
app.use('/full', express_1.default.static(path_1.default.join(__dirname, 'full')));
app.use(logger_1.default);
app.use('/api', routes_1.default);
app.listen(port, function () {
    console.log("Server is running on port : " + port);
});
exports.default = app;
