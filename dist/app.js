"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const mail_1 = __importDefault(require("./routes/mail"));
const config_1 = __importDefault(require("./config/config"));
const app = new koa_1.default();
const router = new koa_router_1.default();
const port = config_1.default.development.port;
app.use(koa_bodyparser_1.default());
app.use(mail_1.default.routes());
app.listen(port, () => {
    console.log("it works!");
});
