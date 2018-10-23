module.exports = {
  reporters: ['default', 'jest-junit'],
  modulePathIgnorePatterns: ['/__fixtures__/'],
  roots: ['<rootDir>/styles', '<rootDir>/components'],
  testEnvironment: 'node',
  testRunner: 'jest-circus/runner',
};
