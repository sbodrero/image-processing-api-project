"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagePocessing_1 = __importDefault(require("../../utilities/imagePocessing"));
var Images = express_1.default.Router();
Images.get('/', imagePocessing_1.default, function (req, res) {
    return;
});
exports.default = Images;
