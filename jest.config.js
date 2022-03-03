module.exports = {
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test/setup.js'],
  setupFilesAfterEnv: ['<rootDir>/test/setup-after-env.js'],
  testPathIgnorePatterns: ['<rootDir>/test/smoke/'],
  verbose: true,
  collectCoverageFrom: ['src/**/*.js', '!src/**/index.js'],
  coverageReporters: ['text', 'text-summary', 'html']
};
