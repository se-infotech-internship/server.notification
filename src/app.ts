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

// Error handler
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        ctx.status = err.statusCode || err.status || 500;
        ctx.body = { code: err.statusCode, message: err.message };
        ctx.app.emit('error', err, ctx);
    }
});


app.listen(port, () => {
    console.log("it works!");
})
