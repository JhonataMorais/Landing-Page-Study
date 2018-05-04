import gulp from 'gulp';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';

import strip from 'gulp-strip-comments';
import uglify from 'gulp-uglify';

import { directories } from '../gulpfile.babel';

gulp.task('plugins', () => {
  gulp.src(directories.app.plugins)
    .pipe(sourcemaps.init())
    .pipe(concat('plugins.js'))
    .pipe(sourcemaps.write())
    // .pipe(strip())
    .pipe(uglify())
    .pipe(gulp.dest(directories.public.javascripts));
});
