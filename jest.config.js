module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./jest/setupFilesAfterEnv.js'],
    testMatch: ['**/*.test.js'],
    moduleDirectories: ['node_modules', 'src'],
    verbose: true,
    timers: 'fake'
};
