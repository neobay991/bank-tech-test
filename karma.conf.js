module.exports = function(config) {
  config.set({
    basePath: '../..',
    frameworks: ['jasmine'],
    preprocessors: {
      'jasmine/jasmine-standalone-3.1.0/src/*.js': 'coverage'
    },
    reporters: ['coverage'],
    files: [
      'jasmine/jasmine-standalone-3.1.0/spec/*.js',
    ],
    plugins: [ 'karma-jasmine', 'karma-coverage' ],
    //...
  });
};
