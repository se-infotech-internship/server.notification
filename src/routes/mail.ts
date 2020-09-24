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
    const text: string = `<h1>Шановний, ${name}!</h1>
        <p> Ви маєте несплачений штраф: <h2> ${fee.title} </h2>
        </p>
        <p>
        Ви порушили: ${fee.data}
        </p>
        <h3>Команда «Way without problem» </h3>
    `;

    main(text, subject, email);
});
// changed status of fee email
router.post('/api/email/status-fee/toUser', async (ctx: Context, err) => {
    const { email, fee, name } = ctx.request.body;

    const subject: string = "Статус штрафу!"
    const text: string = `<h1>Шановний, ${name}!</h1>
        <p> Ваш штраф: 
        "${fee.title}", скоєний : ${fee.data}
        </p>
        <p>
        Має новий статус оплати – ${fee.status}!
        </p>
        <h3>Команда «Way without problem» </h3>
    `;

    main(text, subject, email);
});

export default router;