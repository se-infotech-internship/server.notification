import koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';

import MailRoutes from './routes/mail';
import config from './config/config';

const app = new koa();

const router = new Router();

const port = config.development.port;

app.use(bodyParser());

app.use(MailRoutes.routes());



app.listen(port, () => {
    console.log("it works!");
})
