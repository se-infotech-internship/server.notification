import koa from 'koa';
import bodyParser from 'koa-bodyparser';

import MailRoutes from './routes/mail';
import PushRoutes from './routes/pushNotifications';
import config from './config/config';

const app = new koa();

const port = config.development.port;

app.use(bodyParser());

app.use(MailRoutes.routes());
app.use(PushRoutes.routes());



app.listen(port, () => {
    console.log("it works!");
})
