const { ProvidePlugin } = require("webpack");
module.exports = function override(config) {
  config.plugins.push(new ProvidePlugin({
    Buffer: ["buffer", "Buffer"]
  }));
  config.plugins.push(new ProvidePlugin({
    process: "process/browser"
  }));
  config.resolve.fallback = {
    buffer: require.resolve("buffer/"),
    stream: require.resolve("stream-browserify"),
    timers: require.resolve("timers-browserify"),
  };
  return config;
};
