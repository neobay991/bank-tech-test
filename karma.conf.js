module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    preprocessors: {
      '/Users/mjawadkhan/Documents/Projects/tech_tests/bank-tech-test/jasmine/jasmine-standalone-3.1.0/src/*.js': 'coverage'
    },
    reporters: ['coverage'],
    files: [
      '/Users/mjawadkhan/Documents/Projects/tech_tests/bank-tech-test/jasmine/jasmine-standalone-3.1.0/spec/*.js',
    ],
    plugins: [ 'karma-jasmine', 'karma-coverage' ],
    //...
  });
};
