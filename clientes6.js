require("@babel/register")({
    presets: ["@babel/preset-env"]
  });

module.exports = require('./ws-client.js')