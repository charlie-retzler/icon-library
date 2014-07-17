var gulp = require('gulp');
var svgSprites = require('gulp-svg-sprites');
var replace = require('gulp-replace');
var rename = require('gulp-rename');
var svg = svgSprites.svg;

var replacementtext = '<ol><li>Find the icon you would like to use in the project. Make sure to double check that we haven\'t already included it. You can view the active fonts here: <a href="http://milacron.crossroads.net/icons/preview-svg.html">http://milacron.crossroads.net/icons/preview-svg.html</a></li><li>Copy the SVG file for the icon you want to use in to the "/app/icons/" directory.</li><li>Run \'gulp\'.</li><li>Your icon will now be added to our sprite and you can use it in the project. Grab your icon code snippet by clicking "Show Snippet".</ol>'

gulp.task('default', function() {

  gulp.src(['assets/preview-svg.html'])
    .pipe(replace('background: black;', 'background: black;fill:white;'))
    .pipe(replace('css/sprites.css', 'assets/css/sprites.css'))
    .pipe(replace('Files Generated:', 'Instructions for using the Crossroads approved icons.'))
    .pipe(replace(/<ol>(?:.|\n)*<\/ol>/gi, replacementtext))
    .pipe(rename("index.html"))
    .pipe(gulp.dest('.'));

  return gulp.src('SVG/*.svg')
    .pipe(svg({defs: true}))
    .pipe(gulp.dest("assets"));

});