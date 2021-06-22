"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.THUMBS_PATH = exports.ROOT_PATH = void 0;
var path_1 = __importDefault(require("path"));
var ROOT_PATH = path_1.default.resolve(__dirname, '../');
exports.ROOT_PATH = ROOT_PATH;
var THUMBS_PATH = ROOT_PATH + "/thumbs";
exports.THUMBS_PATH = THUMBS_PATH;
