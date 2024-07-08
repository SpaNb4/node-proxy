import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'dotenv/config';

const app = express();

const proxy = createProxyMiddleware({
  target: 'https://api.themoviedb.org',
  changeOrigin: true,
});

app.use(proxy);

app.listen(process.env.PORT || 3000);
