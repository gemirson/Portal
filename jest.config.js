module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  watchPathIgnorePatterns: [
    '<rootDir>/jest.json'
  ]

}