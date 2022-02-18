module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['./tests/setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testPathIgnorePatterns: ['/pages/', '/dist/', '/lib/'],
  collectCoverage: true,
  coverageReporters: ['json-summary', 'html'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['babel-jest', { configFile: './tests/.babelrc.js' }],
  },
};
