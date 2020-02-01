const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

module.exports = {
  target:'serverless',
  webpack: config => {
    config.node = {
      fs: 'empty'
    },
    config.target = 'serverless'
    return config
  }
}
module.exports = withPlugins([withCSS, withFonts, withImages]);

