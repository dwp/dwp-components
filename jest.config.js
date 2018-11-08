module.exports = {
  moduleFileExtensions: ['js'],
  reporters: ['default', 'jest-junit'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
  // transformIgnorePatterns: ['/node_modules/.+\\.js$'],
};
