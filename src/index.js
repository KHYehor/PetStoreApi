'use strict';

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');

const sessionConfig = require('./configs/session');
const { checkAuth, passport } = require('./authentication');
const routing = require('./routing');

const app = new Koa();
app.keys = [process.env.SECRET];

app.use(bodyParser());
app.use(session(sessionConfig, app));
app.use(passport.initialize());
app.use(passport.session());
app.use(checkAuth);
app.use(routing.routes());

// must be moved to process.env
app.listen(8000);
