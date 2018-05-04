/* jshint strict: false */
/* globals require, console */
import gulp from 'gulp';
import exit from 'gulp-exit';

import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';

import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';


const compile = (watch) => {
    const bundler = watchify(
      browserify('app/src/app.js', {debug: true}).transform(babelify, {
        presets: ["es2015"],
        sourceMaps: true
    }));

    const rebundle = () => {
        return bundler
            .bundle()
            .on('error', function (err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('app/src/app.js'))
            .pipe(buffer())
            .pipe(rename('bundle.js'))
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./sourcemaps'))
            .pipe(gulp.dest('./build/assets/javascripts'));
    }

    if (watch) {
        bundler.on('update', () => {
            console.log('-> bundling...');
            rebundle();
        });

        rebundle();
    } else {
        rebundle().pipe(exit());
    }
}

const watch = () => {
    return compile(true);
}

gulp.task('javascripts:build', () => {
    return compile();
});
gulp.task('javascripts:watch', () => {
    return watch();
});

gulp.task('javascripts', ['javascripts:watch']);
