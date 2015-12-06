/*jslint node: true, indent: 2 */
var gulp = require('gulp'),
  <% if (useJSLint) { %>jslint = require('gulp-jslint')<% } else { %>jshint = require('gulp-jshint')<% }%>,
  jasmine = require('gulp-jasmine');

<% if (useJSLint) { %>
gulp.task('jslint', function () {
  return gulp.src(['package.json', 'Gruntfile.js', 'index.js', 'routes/**/*.js', 'common/**/*.js', 'tests/**/*.js'])
    .pipe(jslint({
      node: true,
      indent: 2
    }))
});
<% if } else { %>
gulp.task('jshint', function () {
  return gulp.src(['package.json', 'Gruntfile.js', 'index.js', 'routes/**/*.js', 'common/**/*.js', 'tests/**/*.js'])
    .pipe(jshint());
});
<% if } %>

gulp.task('jasmine', function () {
  return gulp.src('test/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('default', [
  '<% if (useJSLint) { %>jslint<% } else { %>jshint<% } %>',
  'jasmine'
]);
