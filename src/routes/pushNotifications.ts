import Router from 'koa-router';
import { Context, Response } from 'koa';
import pusher from '../util/pusher';

const router = new Router();


// payment of the app notification
router.post('/api/push/oplata/toUser', async (ctx: Context, err) => {

    const {registrationToken, name} = ctx.request.body;

    const message = {
        notification: {
            title: 'Оплата додатку',
            body: `Шановний, ${name}! Через 5 днів закінчується термін сплаченого періоду за додаток «Way without problem». Будь ласка, сплатіть за додаток, щоб використовувати всі його функції`
        }
    };

    await pusher(registrationToken, message);

    ctx.body = {
        message: "all is allright"
    }

});

// new fee notification router
router.post('/api/push/new-fee/toUser', async (ctx: Context, err) => {

    const { registrationToken, fee, name } = ctx.request.body;

    const message = {
        notification: {
            title: 'Новий штраф!',
            body: `Шановний, ${name}! Ви маєте несплачений штраф:  ${fee.title}. Команда «Way without problem» `
        }
    };

    await pusher(registrationToken, message);
    ctx.body = {
        message: "all is allright"
    }
});

// changed status of fee notification
router.post('/api/push/status-fee/toUser', async (ctx: Context, err) => {

    const { registrationToken, fee, name } = ctx.request.body;

    const message = {
        notification: {
            title: 'Статус штрафу!',
            body: `Шановний, ${name}! Статус сплаченого штрафа ${fee.title}, змінено на статус ${fee.status}. Команда «Way without problem» `
        }
    };

    await pusher(registrationToken, message);
    ctx.body = {
        message: "all is allright"
    }
});

export default router;