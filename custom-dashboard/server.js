const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const config = require('./config.json');

const port = parseInt(process.env.PORT, 10) || 7000
const dev = process.env.NODE_ENV !== 'production';
const app = express();

if (dev) app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', createProxyMiddleware({
  target: 'https://portal-api.metalabs.io',
  changeOrigin: true,
  pathRewrite: { '^/api': '/v1' },
  logLevel: 'debug',
  headers: { 'Meta-Labs-Account': config.account },
}));

app.get('/login', (req, res) => {
  const loginUrl = new URL('https://discord.com/oauth2/authorize');
  loginUrl.searchParams.append('response_type', 'code');
  loginUrl.searchParams.append('redirect_uri', 'https://portal.vercel.app/api/auth/discord/callback');
  loginUrl.searchParams.append('scope', 'identify email guilds.join');
  loginUrl.searchParams.append('state', req.hostname);
  loginUrl.searchParams.append('client_id', '648234176805470248');

  res.redirect(loginUrl.href)
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
