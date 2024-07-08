import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import 'dotenv/config';

const app = express();

const apiProxy = createProxyMiddleware({
  target: 'https://api.themoviedb.org',
  changeOrigin: true,
});

const imgProxy = createProxyMiddleware({
  target: 'https://image.tmdb.org',
  changeOrigin: true,
});

app.use('/api', apiProxy);

app.use('/img', imgProxy);

app.listen(process.env.PORT || 3000);
