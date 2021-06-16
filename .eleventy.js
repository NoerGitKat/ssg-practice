module.exports = function (config) {
  // Enable JS
  config.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
