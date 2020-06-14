const packageJson = require('./package');
const devMode = process.env.NODE_ENV === 'development';
const prodMode = process.env.NODE_ENV === 'production';

console.log('Version of package.json', packageJson.version);

module.exports = function override(config) {
  if (devMode) {
    return config;
  } else if (prodMode) {
    //переписать свойства в плагинах
    config.plugins.forEach(plugin => {
      switch (plugin.constructor.name) {
        case 'HtmlWebpackPlugin':
          plugin.options.minify.collapseWhitespace = false; //не сжимать html в одну строку
          break;

        default:
          break;
      }
    });

    return config;
  }

  return config;
};
