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
    main(text, subject, email);
});
// new fee email router
router.post('/api/email/new-fee/toUser', async (ctx: Context, err) => {
    const { email, fee, name } = ctx.request.body;

    const subject: string = "Новий штраф!"
    const text: string = `<h1>Шановний ${name}!</h1>
        <p> Ви маєте несплачений штраф:
        ${fee}
        </p>
        <h3>Команда «Way without problem» </h3>
    `;

    main(text, subject, email);
});
// changed status of fee email
router.post('/api/email/status-fee/toUser', async (ctx: Context, err) => {
    const { email, fee, status, name } = ctx.request.body;

    const subject: string = "Статус штрафу!"
    const text: string = `<h1>Шановний, ${name}!</h1>
        <p> Ви маєте несплачений штраф:
        ${fee}
        </p>
        <p>
        Статус Вашого сплаченого штрафу – ${status}
        </p>
        <h3>Команда «Way without problem» </h3>
    `;

    main(text, subject, email);
});

export default router;