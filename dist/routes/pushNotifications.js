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
const pusher_1 = __importDefault(require("../util/pusher"));
const router = new koa_router_1.default();
// payment of the app email
router.post('/api/push/oplata/toUser', (ctx, err) => __awaiter(void 0, void 0, void 0, function* () {
    const registrationToken = ctx.request.body;
    const name = ctx.request.body;
    const message = {
        notification: {
            title: 'Оплата додатку',
            body: `Шановний, ${name}! Через 5 днів закінчується термін сплаченого періоду за додаток «Way without problem». Будь ласка, сплатіть за додаток, щоб використовувати всі його функції`
        }
    };
    pusher_1.default(registrationToken, message);
}));
// new fee email router
router.post('/api/push/new-fee/toUser', (ctx, err) => __awaiter(void 0, void 0, void 0, function* () {
    const { registrationToken, fee, name } = ctx.request.body;
    const message = {
        notification: {
            title: 'Новий штраф!',
            body: `Шановний, ${name}! Ви маєте несплачений штраф:  ${fee.title}. Команда «Way without problem» `
        }
    };
    pusher_1.default(registrationToken, message);
}));
// changed status of fee email
router.post('/api/push/status-fee/toUser', (ctx, err) => __awaiter(void 0, void 0, void 0, function* () {
    const { registrationToken, fee, name } = ctx.request.body;
    const message = {
        notification: {
            title: 'Статус штрафу!',
            body: `Шановний, ${name}! Статус сплаченого штрафа ${fee.title}, змінено на статус ${fee.status}. Команда «Way without problem» `
        }
    };
    pusher_1.default(registrationToken, message);
}));
exports.default = router;
