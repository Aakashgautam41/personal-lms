module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFiles: ["./jest.setup.js"],
};
