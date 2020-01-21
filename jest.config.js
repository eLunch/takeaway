module.exports = {
    moduleFileExtensions: ["js", "jsx", "json"],
    moduleNameMapper: {
        "\\.(css|scss|svg|png)$": "identity-obj-proxy",
    },
    globals: {
        'js-jest': {
          diagnostics: false
        }
      },
    setupFilesAfterEnv: ["./__tests__/setupEnzyme.js"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    testMatch: ["**/?(*.)(spec|test).js?(x)"],
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$",
        "^.+\\.module\\.{css,sass,scss}$",
    ],
};