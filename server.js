const Koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const app = next({dev:true});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  router.get('/(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });
  server.use(router.allowedMethods());
  server.use(router.routes());
  server.listen(3000, () => console.log('> Ready on http://localhost:3000'));
}).catch(err => {
  console.log('error!', err);
});
