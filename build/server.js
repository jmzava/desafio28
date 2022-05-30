"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./src/app"));
// desafio 28
const minimist_1 = __importDefault(require("minimist"));
const args = (0, minimist_1.default)(process.argv.slice(2));
//
app_1.default.set('views', __dirname + '/public/views');
app_1.default.set('view engine', 'ejs');
app_1.default.use(express_1.default.static(__dirname + '/public'));
const PORT = args._[0] || process.env.PORT || 8080;
app_1.default
    .listen(PORT, () => console.log(`http://localhost:${PORT}`))
    .on('error', err => console.log(err));
