import * as koa from 'koa';
import * as Router from 'koa-router';

import MailRoute from './routes/mail';

const app = new koa();

const router = new Router();

app.use(MailRoute.routes());

app.use(router.routes());


app.listen(3000, () => {
    console.log("it works!");
})