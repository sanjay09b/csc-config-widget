module.exports = {
    preset: 'ts-jest',
    verbose: true,
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
    testEnvironment: "jsdom",
    collectCoverage: true,
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80
      },
    },
    moduleNameMapper: {
      "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/identity-obj-proxy"
    }
  };