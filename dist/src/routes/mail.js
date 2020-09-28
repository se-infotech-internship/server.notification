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
// payment of the app email
router.post('/api/email/oplata/toUser', (ctx, err) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, name } = ctx.request.body;
    const subject = "Оплата додатку";
    const text = `<h1>Шановний, ${name}!</h1>
        <p> Через 5 днів закінчується термін
        сплаченого періоду за додаток «Way
        without problem».
        Будь ласка, сплатіть за додаток, щоб
        використовувати всі його функції
        </p>
        <h3>Команда «Way without problem» </h3>
    `;
    mailer_1.default(text, subject, email);
}));
// new fee email router
router.post('/api/email/new-fee/toUser', (ctx, err) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fee, name } = ctx.request.body;
    const subject = "Новий штраф!";
    const text = `<h1>Шановний, ${name}!</h1>
        <p> Ви маєте несплачений штраф: <h2> ${fee.title} </h2>
        </p>
        <p>
        Ви порушили: ${fee.date}
        </p>
        <h3>Команда «Way without problem» </h3>
    `;
    mailer_1.default(text, subject, email);
}));
// changed status of fee email
router.post('/api/email/status-fee/toUser', (ctx, err) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fee, name } = ctx.request.body;
    const subject = "Статус штрафу!";
    const text = `<h1>Шановний, ${name}!</h1>
        <p> Ваш штраф: 
        "${fee.title}", скоєний : ${fee.date}
        </p>
        <p>
        Має новий статус оплати – ${fee.status}!
        </p>
        <h3>Команда «Way without problem» </h3>
    `;
    mailer_1.default(text, subject, email);
}));
exports.default = router;
