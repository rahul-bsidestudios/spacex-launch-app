module.exports = {
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/jest/__mocks__/styleMock.js',
	},
	setupFiles: ["<rootDir>/jest/setupTests.js"]
};