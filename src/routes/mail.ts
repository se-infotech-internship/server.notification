import Router from 'koa-router';
import { Context } from 'koa';
import main from '../util/mailer';

const router = new Router();

// payment of the app email
router.post('/api/email/oplata/toUser', async (ctx: Context, err) => {
    const { email, name } = ctx.request.body;


    const subject: string = "Оплата додатку";
    const text: string = `<h1>Шановний, ${name}!</h1>
        <p> Через 5 днів закінчується термін
        сплаченого періоду за додаток «Way
        without problem».
        Будь ласка, сплатіть за додаток, щоб
        використовувати всі його функції
        </p>
        <h3>Команда «Way without problem» </h3>
    `;

    try {
        main(text, subject, email);
        ctx.status = 200;
        ctx.body = {
            message: "successed"
        };
    }
    catch (err) {
        ctx.body = {
            message: "Failed to send email",
            error: err
        };
    }

});

// new fee email router
router.post('/api/email/new-fee/toUser', async (ctx: Context, err) => {
    const { email, link, name } = ctx.request.body;

    const subject: string = "Новий штраф!"
    const text: string = `<h1>Шановний, ${name}!</h1>
        <p> Ви маєте несплачений штраф:  ${link} 
        </p>
        <h3>Команда «Way without problem» </h3>
    `;

    try {
        main(text, subject, email);
        ctx.status = 200;
        ctx.body = {
            message: "successed"
        };
    }
    catch (err) {
        ctx.body = {
            message: "Failed to send email",
            error: err
        };
    }
});

// changed status of fee email
router.post('/api/email/status-fee/toUser', async (ctx: Context, err) => {
    const { email, fee, name } = ctx.request.body;

    const subject: string = "Статус штрафу!"
    const text: string = `<h1>Шановний, ${name}!</h1>
        <p> Ваш штраф: 
        "${fee.title}", скоєний : ${fee.date}
        </p>
        <p>
        Має новий статус оплати – ${fee.status}!
        </p>
        <h3>Команда «Way without problem» </h3>
    `;

    try {
        main(text, subject, email);
        ctx.status = 200;
        ctx.body = {
            message: "successed"
        };
    }
    catch (err) {
        ctx.body = {
            message: "Failed to send email",
            error: err
        };
    }
});

// signup email confirmation route
router.post('/api/email/confirm/toUser', async (ctx: Context, err) => {
    const { email, name, link } = ctx.request.body;

    const subject: string = "Підтвердження email!"

    const text: string = `<h1>Шановний, ${name}!</h1> 
        <p> Щоб підтвердити Email перейдіть по посиланню:</p>
        <p> ${link}</p>
        <h3>Команда «Way without problem» </h3>
    `
    try {
        main(text, subject, email);
        ctx.status = 200;
        ctx.body = {
            message: "successed"
        };
    }
    catch (err) {
        ctx.body = {
            message: "Failed to send email",
            error: err
        };
    }
});

// forgot password email route
router.post('/api/email/change/toUser', async (ctx: Context, err) => {
    const { email, name, link } = ctx.request.body;

    const subject: string = "Зміна паролю!";

    const text: string = `<h1> Шановний, ${name}!</h1> 
    <p> Щоб змінити пароль перейдіть по посиланню:</p>
    <p> ${link} </p>
    <h3>Команда «Way without problem» </h3>
    `;

    try {
        main(text, subject, email);
        ctx.status = 200;
        ctx.body = {
            message: "successed"
        };
    }
    catch (err) {
        ctx.body = {
            message: "Failed to send email",
            error: err
        };
    }
})


export default router;