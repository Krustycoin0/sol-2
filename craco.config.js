// craco.config.js
module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Aggiungi @solana/web3.js alla transpilazione di Babel
      webpackConfig.module.rules[1].include = [
        webpackConfig.module.rules[1].include,
        /node_modules\/@solana\/web3\.js/,
      ];
      return webpackConfig;
    },
  },
};