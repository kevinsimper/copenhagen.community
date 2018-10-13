const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
    };
  },
});
