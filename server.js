const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hoge';
});

app.listen(3000);
