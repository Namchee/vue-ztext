module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'vue',
  ],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
};
