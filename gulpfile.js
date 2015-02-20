var gulp = require('gulp');
var traceur = require('gulp-traceur');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

// Set up Traceur to use options for AtScript
// AtScript requires
//  - Runtime Type Assertions (typeAssertions, typeAssertionModule)
//  - Types (types)
//  - Meta-data annotations (annotations)
var TRACEUR_OPTIONS = {
  modules: 'amd',
  script: false,
  types: true,
  typeAssertions: true,
  typeAssertionModule: 'assert',
  annotations: true,
  sourceMaps: 'file'
};

gulp.task('build', function() {
  gulp.src(['src/**/*.es6',])
    .pipe(sourcemaps.init())
    .pipe(traceur(TRACEUR_OPTIONS))
    .pipe(rename(function(file) {
      file.extname = file.extname.replace('.es6', '.js');
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});
