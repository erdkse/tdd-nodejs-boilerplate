module.exports = {
    verbose: true,
    testEnvironment: 'node',
    rootDir: '.',
    setupFilesAfterEnv: ['./jest/setupFilesAfterEnv.js'],
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    timers: 'fake'
};
