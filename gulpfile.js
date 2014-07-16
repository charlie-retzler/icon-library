var gulp = require('gulp');
var svgSprites = require('gulp-svg-sprites');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var svg = svgSprites.svg;

gulp.task('default', function() {

  gulp.src(['assets/preview-svg.html'])
    .pipe(replace('background: black;', 'background: black;fill:white;'))
    .pipe(replace('css/sprites.css', 'assets/css/sprites.css'))
    //.pipe(replace(/<ol>.*<\/ol>/im, ''))
    .pipe(rename("index.html"))
    .pipe(gulp.dest('.'));

  return gulp.src('SVG/*.svg')
    .pipe(svg({defs: true}))
    .pipe(gulp.dest("assets"));

});

