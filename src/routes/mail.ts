import  Router from 'koa-router';

const router = new Router();

router.get('/api/email/toUser/:email', async (ctx, err) => {
    const email = ctx.params.email;

});

export default router;