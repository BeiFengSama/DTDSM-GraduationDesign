const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 这里指定需要代理的 API 路径前缀，例如/api
    createProxyMiddleware({
      target: 'http://localhost:5000', // 这里填写 Flask 后端的地址
      changeOrigin: true,
    })
  );
};
