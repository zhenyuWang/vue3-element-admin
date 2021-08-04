module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.vue$": "vue-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,ts,vue}",
    "tests/**/*.{js,ts}",
    "!**/node_modules/**",
    "!**/shims-vue.d.ts",
    "!**/vite-env.d.ts",
    "!**/main.ts",
    "!src/utils/request.ts",
  ],
};
