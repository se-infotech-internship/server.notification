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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const mailer_1 = __importDefault(require("../util/mailer"));
const router = new koa_router_1.default();
router.get('/api/email/toUser/:email/:name/', (ctx, err) => __awaiter(void 0, void 0, void 0, function* () {
    const email = ctx.params.email;
    const name = ctx.params.name;
    const subject = "Оплата додатку";
    const text = `<h1>Шановний ${name}</h1>
        <p> Через 5 днів закінчується термін
        сплаченого періоду за додаток «Way
        without problem»
        Будь ласка, сплатіть за додаток, щоб
        використовувати всі його функції
        </p>
        <h1>Команда «Way without problem» </h1>
    `;
    yield mailer_1.default(text, subject, email);
}));
exports.default = router;
