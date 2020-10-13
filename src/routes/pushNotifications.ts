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

    try{
        await pusher(registrationToken, message);
        ctx.status = 200;
        ctx.body = {
            message: "all is allright"
        }
    }
    catch(err){
        ctx.body = {
            message: "failed to send notification",
            error: err
        }
    }

});

// new fee notification router
router.post('/api/push/new-fee/toUser', async (ctx: Context, err) => {

    const { registrationToken } = ctx.request.body;

    const message = {
        notification: {
            title: 'Новий штраф!',
            body: `Щоб переглянути перейдіть у додаток`
        }
    };

    try{
        await pusher(registrationToken, message);
        ctx.status = 200;
        ctx.body = {
            message: "all is allright"
        }
    }
    catch(err){
        ctx.body = {
            message: "failed to send notification",
            error: err
        }
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

    try{
        await pusher(registrationToken, message);
        ctx.status = 200;
        ctx.body = {
            message: "all is allright"
        }
    }
    catch(err){
        ctx.body = {
            message: "failed to send notification",
            error: err
        }
    }
});


export default router;