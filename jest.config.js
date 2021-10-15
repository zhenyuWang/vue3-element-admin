module.exports = {
  // 转换器
  transform: {
    // jest解析js的时候通过babel-jest解析
    "^.+\\.jsx?$": "babel-jest",
    // jest解析vue的时候通过vue-jest解析
    "^.+\\.vue$": "vue-jest",
    // jest解析ts的时候通过ts-jest解析
    "^.+\\.tsx?$": "ts-jest",
  },
  // 配置测试脚本文件匹配规则
  testMatch: ["**/tests/unit/?(*.)+(spec).[jt]s?(x)"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
