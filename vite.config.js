import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    proxy: {
      // Proxy for News API
      '/api/news': {
        target: 'https://newsapi.org', // Actual API base URL
        changeOrigin: true, // Ensures the Host header matches the target URL
        rewrite: (path) => path.replace(/^\/api\/news/, ''), // Removes '/api/news' prefix
      },
      // Proxy for CoinGecko API
      '/api/coingecko': {
        target: 'https://api.coingecko.com', // Actual API base URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/coingecko/, ''), // Removes '/api/coingecko' prefix
      },
    },
  },
});
