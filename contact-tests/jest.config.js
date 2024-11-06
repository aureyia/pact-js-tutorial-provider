module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  verbose: true,
  collectCoverageFrom: ['!**/*.dto.ts', '!**/*.spec.ts'],
  coverageDirectory: 'test-results',
  reporters: ['default'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/$1',
  },
};
